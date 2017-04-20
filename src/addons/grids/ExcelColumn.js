var PropTypes = require('prop-types');
/* @flow */
var React = require('react');

var ExcelColumnShape = {
  name: PropTypes.string,
  key: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  width: PropTypes.number.isRequired
}

module.exports = ExcelColumnShape;
