var React = require('react');
window.React = React;
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var basicExample     = require('./scripts/example01-basic');
var resizableExample = require('./scripts/example02-resizable-cols');
var fixedColsExample = require('./scripts/example03-fixed-cols');
var editableExample  = require('./scripts/example04-editable');
var formatterExample = require('./scripts/example05-custom-formatters');
var editorsExample   = require('./scripts/example06-built-in-editors');
var sortableExample  = require('./scripts/example08-sortable-cols');
var filterableExample  = require('./scripts/example09-filterable-grid');
var millionRowsExample = require('./scripts/example10-one-million-rows');
var immutableDataExample = require('./scripts/example11-immutable-data');
var customRowRenderer = require('./scripts/example12-customRowRenderer');
var fullExample = require('./scripts/example13-all-features');
var fullExampleImmutable = require('./scripts/example14-all-features-immutable');
var emptyRowsExample = require('./scripts/example15-empty-rows');

var { Route, Router, Link, IndexRoute, hashHistory } = ReactRouter;

window.AutoCompleteEditor = require('./components/AutoCompleteEditor')

var App = React.createClass({
  render() {
    return (
      <div className="container-fluid top-space">
        <div className="row">
          <div className="col-md-2 top-space">
            <nav id="sidebar" className="bs-docs-sidebar hidden-print hidden-xs hidden-sm">
              <ul className="nav bs-docs-sidenav">
                <li>
                  <Link to="/basic">Basic Example</Link>
                </li>
                <li>
                  <Link to="/resizable">Resizable Columns</Link>
                </li>
                <li>
                  <Link to="/fixed">Frozen Columns</Link>
                </li>
                <li>
                  <Link to="/editable">Editable Grid</Link>
                </li>
                <li>
                  <Link to="/formatters">Custom Formatters</Link>
                </li>
                <li>
                  <Link to="/editors">Rich Cell Editors</Link>
                </li>
                <li>
                  <Link to="/million-rows">One Million Rows</Link>
                </li>
                <li>
                  <Link to="/sortable">Sortable Grid</Link>
                </li>
                <li>
                  <Link to="/filterable">Filterable Grid</Link>
                </li>
                <li>
                  <Link to="/immutable-data">Immutable Data Grid</Link>
                </li>
                <li>
                  <Link to="/custom-row-renderer">Custom Row Render</Link>
                </li>
                <li>
                  <Link to="/empty-rows">Empty Rows</Link>
                </li>
                <li>
                  <Link to="/all-the-features">All-The-Features Grid</Link>
                </li>
                <li>
                  <Link to="/all-features-immutable">All-The-Features with Immutable Data</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-10">
            <div id="example">
              <h1 className="page-header">React Data Grid Examples</h1>
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route path='/' component={App}>
    <IndexRoute component={basicExample}/>
    <Route path="basic" component={basicExample}/>
    <Route path="resizable" component={resizableExample}/>
    <Route path="fixed" component={fixedColsExample}/>
    <Route path="editable" component={editableExample}/>
    <Route path="formatters" component={formatterExample}/>
    <Route path="editors" component={editorsExample}/>
    <Route path="sortable" component={sortableExample}/>
    <Route path="filterable" component={filterableExample}/>
    <Route path="million-rows" component={millionRowsExample}/>
    <Route path="all-the-features" component={fullExample}/>
    <Route path="all-features-immutable" component={fullExampleImmutable}/>
    <Route path="immutable-data" component={immutableDataExample}/>
    <Route path="custom-row-renderer" component={customRowRenderer}/>
    <Route path="empty-rows" component={emptyRowsExample}/>
  </Route>
);


ReactDOM.render(
  <Router history={hashHistory}>
    {routes}
  </Router>
, document.getElementById('app'));
