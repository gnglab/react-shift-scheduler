var React = require("react");
var router = require("react-router");
var Route = router.Route;
var Router = router.Router;

var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var Main = require("../components/Main");
var Login = require("../components/children/Login");
var Register = require("../components/children/Register");
var AddEmployee = require("../components/children/AddEmployee");

module.exports = (

  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
      <Route path="addingEmployees" component={AddEmployee} />

      <IndexRoute component={Login} />

    </Route>
  </Router>

);
