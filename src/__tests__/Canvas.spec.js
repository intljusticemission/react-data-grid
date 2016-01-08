'use strict';
var React        = require('react');
var rewire       = require('rewire');
var Canvas         = rewire('../Canvas');
var TestUtils    = require('react-addons-test-utils');
var rewireModule = require("../../test/rewireModule");
var StubComponent = require("../../test/StubComponent");

describe('Canvas Tests', () => {
  var testElement;

  var testProps = {
    rowHeight: 25,
    height: 200,
    displayStart: 1,
    displayEnd: 10,
    rowsCount: 1,
    columns: [],
    rowGetter: function() { return [] },
    cellMetaData: {}
  }

  beforeEach(() => {
    testElement = TestUtils.renderIntoDocument(<Canvas {...testProps}/>);
  });

  it('should create a new instance of Canvas', () => {
    expect(testElement).toBeDefined();
  });

  it('Should not call setScroll on render', () => {
    testElement = TestUtils.renderIntoDocument(<Canvas {...testProps}/>);
    spyOn(testElement, "setScrollLeft");
    expect(testElement.setScrollLeft).not.toHaveBeenCalled();
  });

  it('Should not call setScroll on update', () => {

    testElement = TestUtils.renderIntoDocument(<Canvas {...testProps}/>);
    //force an update
    spyOn(testElement, "setScrollLeft");
    testElement.componentDidUpdate(testProps);
    expect(testElement.setScrollLeft).not.toHaveBeenCalled();
  });


});
