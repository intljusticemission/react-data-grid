/* @flow */
'use strict';
var PropTypes = require('prop-types');
var React = require('react');

var CheckboxEditor = React.createClass({

  PropTypes : {
    value : PropTypes.bool.isRequired,
    rowIdx : PropTypes.number.isRequired,
    column: PropTypes.shape({
      key: PropTypes.string.isRequired,
      onCellChange: PropTypes.func.isRequired
    }).isRequired
  },

  render(): ? ReactElement {
    var checked = this.props.value != null ? this.props.value : false;
    return (
      <input
        className="react-grid-CheckBox"
        type="checkbox"
        checked={checked}
        onClick={this.handleChange}
      />
    );
  },

  handleChange(e: Event) {
    this.props.column.onCellChange(this.props.rowIdx, this.props.column.key, e);
  }
});

module.exports = CheckboxEditor;
