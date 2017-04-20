/* @flow */
/* Flow issues:
overrides? getDefaultValue, getStyle, onKeyDown
*/
/**
 * @jsx React.DOM
 */
'use strict';

var PropTypes = require('prop-types');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactAutocomplete = require('ron-react-autocomplete');
var ExcelColumn = require('../../src/addons/grids/ExcelColumn');

var optionPropType = PropTypes.shape({
      id    :   PropTypes.required,
      title :   PropTypes.string
    });

class AutoCompleteEditor extends React.Component {
  static propTypes = {
    onCommit : PropTypes.func.isRequired,
    options : PropTypes.arrayOf(optionPropType).isRequired,
    label : PropTypes.string,
    value : PropTypes.any.isRequired,
    valueParams: PropTypes.arrayOf(PropTypes.string),
    column: PropTypes.shape(ExcelColumn).isRequired,
    resultIdentifier : PropTypes.string,
    search : PropTypes.string
  };

  static defaultProps = {
    resultIdentifier : 'id'
  };

  getValue = (): any => {
    var value, updated = {};
    if (this.hasResults() && this.isFocusedOnSuggestion()) {
      value = this.getLabel(this.refs.autoComplete.state.focusedValue);
      if (this.props.valueParams) {
        value = this.constuctValueFromParams(this.refs.autoComplete.state.focusedValue, this.props.valueParams);
      }
    }
    else {
      value = this.refs.autoComplete.state.searchTerm;
    }
    updated[this.props.column.key] = value;
    return updated;
  };

  getInputNode = (): HTMLInputElement => {
    return ReactDOM.findDOMNode(this).getElementsByTagName('input')[0];
  };

  render(): ?ReactElement {
    var label = this.props.label != null ? this.props.label : 'title';
    return (<div height={this.props.height} onKeyDown={this.props.onKeyDown}>
      <ReactAutocomplete  search={this.props.search} ref="autoComplete" label={label} onChange={this.handleChange} resultIdentifier={this.props.resultIdentifier} options={this.props.options} value={{ title : this.props.value }} />
      </div>);
  }

  handleChange = () => {
    this.props.onCommit();
  };

  hasResults = (): boolean => {
    return this.refs.autoComplete.state.results.length > 0;
  };

  isFocusedOnSuggestion = (): boolean => {
    var autoComplete = this.refs.autoComplete;
    return autoComplete.state.focusedValue != null;
  };

  getLabel = (item: any): string => {
    var label = this.props.label != null ? this.props.label : 'title';
    if (typeof label === 'function') {
      return label(item);
    }
    else if (typeof label === 'string') {
      return item[label];
    }
  };

  constuctValueFromParams = (obj: any, props: ?Array<string>): string => {
    if (!props) {
      return '';
    }
    var ret = [];
    for (var i = 0, ii = props.length; i < ii; i++) {
      ret.push(obj[props[i]]);
    }
    return ret.join('|');
  };
}

module.exports = AutoCompleteEditor;
