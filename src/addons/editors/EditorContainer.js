/* @flow */
'use strict';
var PropTypes = require('prop-types');
var React                   = require('react');
var joinClasses             = require('classnames');
var keyboardHandlerMixin    = require('../../KeyboardHandlerMixin');
var SimpleTextEditor        = require('./SimpleTextEditor');
var isFunction              = require('../utils/isFunction');

let checkAndCallOnEditor =
  (ctx, fn, ...args) => isFunction(ctx.getEditor()[fn]) ? ctx.getEditor()[fn](...args) : false;

var supportedInputTypes = {
  color: true,
  date: true,
  datetime: true,
  'datetime-local': true,
  email: true,
  month: true,
  number: true,
  password: true,
  range: true,
  search: true,
  tel: true,
  text: true,
  time: true,
  url: true,
  week: true,
};

function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  if (nodeName === 'input') return !!supportedInputTypes[elem.type];
  if (nodeName === 'textarea') return true;
  return false;
}

var EditorContainer = React.createClass({

  mixins: [keyboardHandlerMixin],

  propTypes: {
    rowData: PropTypes.object.isRequired,
    cellMetaData: PropTypes.shape({
      selected: PropTypes.object.isRequired,
      copied: PropTypes.object,
      dragged: PropTypes.object,
      onCellClick: PropTypes.func,
      onCellDoubleClick: PropTypes.func
    }).isRequired,
    column: PropTypes.object.isRequired,
    height: PropTypes.number.isRequired
  },

  changeCommitted: false,

  getInitialState() {
    return { isInvalid : false }
  },

  componentDidMount: function() {
    checkAndCallOnEditor(this, 'editorWillMount', this.props.cellMetaData);
  },

  createEditor(): ReactElement {
    var customEditor = this.props.column.editor;
    var editorProps = {
      ref: c => this.editor = c,
      column: this.props.column,
      value: this.getInitialValue(),
      onCommit: this.commit,
      rowData: this.props.rowData,
      height: this.props.height
    };

    if (customEditor) {
      if (React.isValidElement(customEditor))
        return React.cloneElement(customEditor, editorProps)
      else if (typeof customEditor === 'function')
        return customEditor(editorProps)
    }

    return <SimpleTextEditor {...editorProps} />;
  },

  onPressEnter() {
    if (!this.editorIsSelectOpen()) {
      this.commit({ key: 'Enter' });
    }
  },

  onPressTab() {
    this.commit({ key: 'Tab' });
  },

  onPressEscape(e: SyntheticKeyboardEvent) {
    if (!this.editorIsSelectOpen()) {
      this.props.cellMetaData.onCommitCancel();
    }
    else {
      // prevent event from bubbling if editor has results to select
      e.stopPropagation();
    }
  },

  onPressArrowDown(e: SyntheticKeyboardEvent) {
    if (this.editorHasResults()) {
      //dont want to propogate as that then moves us round the grid
      e.stopPropagation();
    }
    else {
      this.commit(e);
    }
  },

  onPressArrowUp(e: SyntheticKeyboardEvent) {
    if (this.editorHasResults()) {
      //dont want to propogate as that then moves us round the grid
      e.stopPropagation();
    }
    else {
      this.commit(e);
    }
  },

  onPressArrowLeft(e: SyntheticKeyboardEvent) {
    //prevent event propogation. this disables left cell navigation
    if (!this.isCaretAtBeginningOfInput()) {
      e.stopPropagation();
    }
    else {
      this.commit(e);
    }
  },

  onPressArrowRight(e: SyntheticKeyboardEvent) {
    //prevent event propogation. this disables right cell navigation
    if (!this.isCaretAtEndOfInput()) {
      e.stopPropagation();
    }
    else {
      this.commit(e);
    }
  },

  shouldPreventKeyDown(e: SyntheticKeyboardEvent): boolean {
    return checkAndCallOnEditor(this, 'shouldPreventKeyDown', e)
  },

  editorHasResults(): boolean {
    return checkAndCallOnEditor(this, 'hasResults')
  },

  editorIsSelectOpen() {
    return checkAndCallOnEditor(this, 'isSelectOpen')
  },

  getEditor() {
    return this.editor;
  },

  commit(args: {key : string}) {
    var opts = args || {}
      , editor = this.getEditor()
      , updated;

    if (editor.getValue)
      updated = editor.getValue();

    if (this.isNewValueValid(updated)) {
      var cellKey = this.props.column.key;
      this.props.cellMetaData.onCommit({
        cellKey,
        updated,
        rowIdx: this.props.rowIdx,
        key: opts.key
      });
    }
    this.changeCommitted = true;
  },

  isNewValueValid(value: string): boolean {
    if (isFunction(this.getEditor().validate)) {
      var isValid = checkAndCallOnEditor(this, 'validate', value)
      this.setState({ isInvalid : !isValid });
      return isValid;
    }
    else {
      return true;
    }
  },

  getInputNode(): HTMLInputElement {
    return this.getEditor().getInputNode
      && this.getEditor().getInputNode();
  },

  getInitialValue(): string {
    var selected = this.props.cellMetaData.selected;
    var keyCode = selected.initialKeyCode;

    if (!keyCode || keyCode === 'Enter') {
      return this.props.value;
    }
    else {
      return '';
    }
  },

  getContainerClass() {
    return joinClasses({
      'has-error' : this.state.isInvalid === true
    })
  },

  renderStatusIcon(): ?ReactElement {
    if (this.state.isInvalid === true) {
      return <span className="glyphicon glyphicon-remove form-control-feedback"></span>
    }
  },

  render(): ?ReactElement {
    return (
      <div className={this.getContainerClass()} onKeyDown={this.onKeyDown} >
        {this.createEditor()}
        {this.renderStatusIcon()}
      </div>
    )
  },

  isCaretAtBeginningOfInput(): boolean {
    var inputNode = this.getInputNode();

    if (!isTextInputElement(inputNode))
      return true

    return inputNode.selectionStart === inputNode.selectionEnd
      && inputNode.selectionStart === 0;
  },

  isCaretAtEndOfInput(): boolean {
    var inputNode = this.getInputNode();
    
    if (!isTextInputElement(inputNode))
      return true

    return inputNode.selectionStart === (inputNode.value || '').length;
  },

  componentWillUnmount: function() {
    if (!this.changeCommitted && !this.hasEscapeBeenPressed()) {
      this.commit({ key:'Enter' });
    }
  },

  hasEscapeBeenPressed() {
    var pressed = false;
    var escapeKey = 27;
    if (window.event) {
      if (window.event.keyCode === escapeKey) {
        pressed = true;
      }
      else if (window.event.which === escapeKey) {
        pressed  = true;
      }
    }
    return pressed;
  }
});

module.exports = EditorContainer;
