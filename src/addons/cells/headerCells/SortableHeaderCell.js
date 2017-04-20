/* @flow */
'use strict';

var PropTypes = require('prop-types');

var React = require('react');
var joinClasses  = require('classnames');
var DEFINE_SORT = {
  ASC : 'ASC',
  DESC : 'DESC',
  NONE  : 'NONE'
}

var SortableHeaderCell = React.createClass({
  propTypes: {
    columnKey : PropTypes.string.isRequired,
    onSort    : PropTypes.func.isRequired,
    sortDirection : PropTypes.oneOf(['ASC', 'DESC', 'NONE'])
  },

  onClick: function() {
    var direction;
    switch (this.props.sortDirection) {
      case null:
      case undefined:
      case DEFINE_SORT.NONE:
        direction = DEFINE_SORT.ASC;
      break;
      case DEFINE_SORT.ASC:
        direction = DEFINE_SORT.DESC;
      break;
    case DEFINE_SORT.DESC:
        direction = DEFINE_SORT.NONE;
      break;
    }
    this.props.onSort(
      this.props.columnKey,
      direction);
  },

  getSortByText : function() {
    var unicodeKeys = {
      'ASC' : '9650',
      'DESC' : '9660',
      'NONE' : ''
    }
    return String.fromCharCode(unicodeKeys[this.props.sortDirection]);
  },

  render: function(): ?ReactElement {
    let sorting =  this.props.sortDirection &&  this.props.sortDirection !== DEFINE_SORT.NONE
    var className = joinClasses(this.props.className, {
      'react-grid-HeaderCell-sortable': true,
      'react-grid-HeaderCell-sortable--ascending': this.props.sortDirection === 'ASC',
      'react-grid-HeaderCell-sortable--descending': this.props.sortDirection === 'DESC'
    });

    return (
      <div
        title={this.props.column.name}
        className={className}
        onClick={this.onClick}
        style={{
          cursor: 'pointer',
          position: 'relative',
          paddingRight: sorting ? 15 : undefined
        }}
      >
        {this.props.column.name}
        { !!sorting &&
          <span style={{ position: 'absolute', right: 0 }}>
            {this.getSortByText()}
          </span>
        }
      </div>
    );
  }
});

module.exports = SortableHeaderCell;
