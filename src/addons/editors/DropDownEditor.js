/* @flow */
'use strict';

var PropTypes = require('prop-types');

var React = require('react');
var ReactDOM = require('react-dom');
var EditorBase = require('./EditorBase');

class DropDownEditor extends EditorBase {

  getInputNode(): HTMLInputElement {
    return ReactDOM.findDOMNode(this);
  }

  onClick() {
    this.getInputNode().focus();
  }

  onDoubleClick() {
    this.getInputNode().focus();
  }

  render(): ?ReactElement {
    return (
      <select style={this.getStyle()} defaultValue={this.props.value} onBlur={this.props.onBlur} onChange={this.onChange} >
        {this.renderOptions()}
      </select>);
  }

  renderOptions(): Array<ReactElement> {
    var options = [];
    this.props.options.forEach(function(name) {
      options.push(<option key={name} value={name}  >{name}</option>);
    }, this);
    return options;
  }

}


DropDownEditor.propTypes = {
    options : PropTypes.arrayOf(PropTypes.string).isRequired,
}

module.exports = DropDownEditor;
