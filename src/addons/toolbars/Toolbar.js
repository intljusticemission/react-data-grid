/* @flow */

'use strict';

var PropTypes = require('prop-types');

var React = require('react');

var Toolbar = React.createClass({
  propTypes: {
    onAddRow : PropTypes.func,
    onToggleFilter : PropTypes.func.isRequired,
    enableFilter : PropTypes.bool,
    numberOfRows : PropTypes.number.isRequired
  },
  onAddRow() {
    if (this.props.onAddRow !== null && this.props.onAddRow instanceof Function) {
      this.props.onAddRow({ newRowIndex : this.props.numberOfRows });
    }
  },

  getDefaultProps(): {enableAddRow: boolean} {
    return {
      enableAddRow : true
    }
  },

  renderAddRowButton(): ReactElement {
    if (this.props.onAddRow) {
      return(<button type="button" className="btn" onClick={this.onAddRow}>
        Add Row
      </button>)
    }
  },

  renderToggleFilterButton(): ReactElement {
    if (this.props.enableFilter) {
      return(  <button type="button" className="btn" onClick={this.props.onToggleFilter}>
      Filter Rows
      </button>)
    }
  },

  render(): ?ReactElement {
    return (
      <div className="react-grid-Toolbar">
        <div className="tools">
          {this.renderAddRowButton()}
          {this.renderToggleFilterButton()}
        </div>
      </div>)
      }
});

module.exports = Toolbar;
