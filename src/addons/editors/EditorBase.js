/* @flow */
'use strict';
var PropTypes = require('prop-types');
var React = require('react');
var ReactDOM = require('react-dom');
var ExcelColumn = require('../grids/ExcelColumn');

class EditorBase extends React.Component {

  getStyle(): {width: string} {
    return {
      width : '100%',
      height: this.props.height
    }
  }

  getValue(): any {
    var updated = {};
    updated[this.props.column.key] = this.getInputNode().value;
    return updated;
  }

  getInputNode(): HTMLInputElement {
    var domNode = ReactDOM.findDOMNode(this);
    if (domNode.tagName === 'INPUT') {
      return domNode;
    }
    else {
      return domNode.querySelector('input:not([type=hidden])');
    }
  }

  editorWillMount() {
    var inputNode = this.getInputNode();

    if (typeof inputNode.focus === 'function')
      inputNode.focus();
  }
}

EditorBase.propTypes = {
  value : PropTypes.any,
  column :  PropTypes.shape(ExcelColumn).isRequired,
  onCommit : PropTypes.func.isRequired
}


module.exports = EditorBase;
