"use strict";

var React          = require('react');
var ReactDOM = require('react-dom');
var joinClasses     = require('classnames');
var PropTypes      = React.PropTypes;
var ExcelColumn    = require('./addons/grids/ExcelColumn');
var ResizeHandle   = require('./ResizeHandle');

var HeaderCell = React.createClass({

  propTypes: {
    renderer: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
    column: PropTypes.shape(ExcelColumn).isRequired,
    onResize: PropTypes.func.isRequired,
    height : PropTypes.number.isRequired,
    onResizeEnd : PropTypes.func.isRequired
  },

  render(): ?ReactElement {
    var resizeHandle;
    if (this.props.column.resizable) {
      resizeHandle = (
        <ResizeHandle
          onDrag={this.onDrag}
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        />
      )
    }
    var className = joinClasses({
      'react-grid-HeaderCell': true,
      'react-grid-HeaderCell--resizing': this.state.resizing,
      'react-grid-HeaderCell--locked': this.props.column.locked
    });

    className = joinClasses(className, this.props.className, this.props.column.cellClass);

    var cell = this.getCell();
    return (
      <div className={className} style={this.getStyle()}>
        {cell}
        {resizeHandle}
      </div>
    );
  },

  getCell(): ReactComponent {
    let props = {
      column: this.props.column,
      className: 'react-grid-HeaderCell__value'
    };

    if (React.isValidElement(this.props.renderer)) {
      return React.cloneElement(this.props.renderer, props);
    }
    else {
      return this.props.renderer(props);
    }
  },

  getDefaultProps(): {renderer: ReactComponent | (props: {column: {name: string}}) => ReactElement} {
    return {
      renderer: simpleCellRenderer
    };
  },

  getInitialState(): {resizing: boolean} {
    return { resizing: false };
  },

  setScrollLeft(scrollLeft: number) {
    var node = ReactDOM.findDOMNode(this);
    node.style.webkitTransform = `translate3d(${scrollLeft}px, 0px, 0px)`;
    node.style.transform = `translate3d(${scrollLeft}px, 0px, 0px)`;
  },

  getStyle(): {width:number; left: number; display: string; position: string; overflow: string; height: number; margin: number; textOverflow: string; whiteSpace: string } {
    return {
      width: this.props.column.width,
      left: this.props.column.left,
      display: 'inline-block',
      position: 'absolute',
      overflow: 'hidden',
      height: this.props.height,
      margin: 0,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    };
  },

  onDragStart(e: SyntheticMouseEvent) {
    this.setState({ resizing: true });
    //need to set dummy data for FF
    if (e && e.dataTransfer && e.dataTransfer.setData) e.dataTransfer.setData('text/plain', 'dummy');
  },

  onDrag(e: SyntheticMouseEvent) {
    var resize = this.props.onResize || null; //for flows sake, doesnt recognise a null check direct
    if (resize) {
      var width = this.getWidthFromMouseEvent(e);
      if (width > 0) {
        resize(this.props.column, width);
      }
    }
  },

  onDragEnd(e: SyntheticMouseEvent) {
    var width = this.getWidthFromMouseEvent(e);
    this.props.onResizeEnd(this.props.column, width);
    this.setState({ resizing: false });
  },

  getWidthFromMouseEvent(e: SyntheticMouseEvent): number {
    var right = e.pageX;
    var left = ReactDOM.findDOMNode(this).getBoundingClientRect().left;
    return right - left;
  }
});

function simpleCellRenderer(props): ReactElement {
  return <div {...props}>{props.column.name}</div>;
}


module.exports = HeaderCell;
