'use strict';
var React        = require('react');
var rewire       = require('rewire');
var Cell         = rewire('../Cell');
var TestUtils    = require('react-addons-test-utils');
var rewireModule = require('../../test/rewireModule');
var StubComponent = require('../../test/StubComponent');

describe('Cell Tests', () => {
  var testElement;
  var ExcelColumnStub = StubComponent('ExcelColumn');
  var EditorContainerStub = StubComponent('EditorContainer');
  var SimpleCellFormatterStub = StubComponent('SimpleCellFormatter');
  // Configure local variable replacements for the module.
  rewireModule(Cell, {
    ExcelColumn     : ExcelColumnStub,
    EditorContainer : EditorContainerStub,
    SimpleCellFormatter : SimpleCellFormatterStub
  });


  var testCellMetaData = {
      selected : { idx : 2, rowIdx : 3 },
      dragged : null,
      onCellClick : function() {},
      onCellDoubleClick : function() {},
      onCommit : function() {},
      onCommitCancel : function() {},
      copied : null,
      handleDragEnterRow : function() {},
      handleTerminateDrag : function() {}
  }
  var testProps = {
    rowIdx : 0,
    idx : 1,
    tabIndex : 1,
    column: { key: 'location' },
    isExpanded: false,
    isRowSelected: false,
    cellMetaData: testCellMetaData,
    handleDragStart: function() {},
    rowData : { name : 'Johnny Test', location : 'Wicklow', likesTesting :'Absolutely' },
    height : 40,
    name : 'JT'
  }

  beforeEach(() => {
    testElement = TestUtils.renderIntoDocument(<Cell {...testProps}/>);
  });

  it('should create a new instance of Cell', () => {
    expect(testElement).toBeDefined();
  });

  it('should render a SimpleCellFormatter with value', () => {
    var formatter = TestUtils.findRenderedComponentWithType(testElement, SimpleCellFormatterStub );
    expect(testElement).toBeDefined();
    expect(formatter.props.value).toEqual('Wicklow');
  });

  it('should render a custom formatter when specified on column', () => {
    var CustomFormatter = StubComponent('CustomFormatter');
    testProps.column.formatter = CustomFormatter;
    testElement = TestUtils.renderIntoDocument(<Cell {...testProps}/>);
    var formatterInstance = TestUtils.findRenderedComponentWithType(testElement, CustomFormatter);
    expect(testElement).toBeDefined();
    expect(formatterInstance.props.value).toEqual('Wicklow');
  });

  describe('When cell is active', () => {

    beforeEach(() => {
      testCellMetaData.selected = {
        idx : testProps.idx,
        rowIdx : testProps.rowIdx,
        active : true
      }
      testElement = TestUtils.renderIntoDocument(<Cell {...testProps}/>);
    });

    it('should render an EditorContainer instead of a formatter', () => {
      testElement = TestUtils.renderIntoDocument(<Cell {...testProps}/>);
      var editorContainerInstance = TestUtils.findRenderedComponentWithType(testElement, EditorContainerStub);
      expect(editorContainerInstance).toBeDefined();

      var props = {
        value : 'Wicklow',
        column : testProps.column,
        isExpanded: false,
        isSelected: true,
        isRowSelected: false,
        rowData : testProps.rowData,
        rowIdx : testProps.rowIdx,
        idx : testProps.idx,
        cellMetaData : testProps.cellMetaData,
        height : testProps.height
      }

      expect(Object.keys(props).sort())
        .toEqual(Object.keys(editorContainerInstance.props).sort())

      Object.keys(props).forEach(k => {
        expect(props[k]).toEqual(editorContainerInstance.props[k])
      })
    });

    it('should append the update cell class to the dom node if present and cell is updated', () => {
      var updateClass = 'highlight-cell';
      testProps.column.getUpdateCellClass = () => updateClass;
      var cellInstance = TestUtils.renderIntoDocument(<Cell {...testProps}/>);
      // force update
      cellInstance.setProps({ rowData: {}, selectedColumn: testProps.column });
      var cellHasUpdateClass = cellInstance.getDOMNode().getAttribute('class').indexOf(updateClass) > -1;
      expect(cellHasUpdateClass).toBe(true);
    })


  });





});
