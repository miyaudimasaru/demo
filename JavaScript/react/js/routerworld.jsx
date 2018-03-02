var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var History = ReactRouter.History;
var Link = ReactRouter.Link;
var BrowserRouter = ReactRouter.BrowserRouter;
var Match = ReactRouter.match;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var prologue = createReactClass({
  render: function(){
    return (
      <section>
        <p>mmmmmmmm</p>
      </section>
    );
  }
});

var prologuev2 = createReactClass({
  render: function(){
    return (
      <section>
        <p>iiiiiiiii</p>
      </section>
    );
  }
});

var App = createReactClass({
  render: function () {
    return (
      <div>
        <div>
          { this.props.children }
        </div>
        <div>
          <p><Link to="/">Dashboard1111</Link></p>
          <p><Link to="a">Inbox2222</Link></p>
          <p><Link to="b">CalendarRoute3333</Link></p>
        </div>
      </div>
    );
  }
});

ReactDOM.render((
  <BrowserRouter>
    <Route path="/" component={App}>
      <Route path="a" component={prologue}/>
      <Route path="b" component={prologuev2}/>
    </Route>
 </BrowserRouter>
),document.getElementById('content')
);
