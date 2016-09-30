var React = require('react');
var Router = require('react-router');
var Route=Router.Route;
var DefaultRoute= Router.DefaultRoute;
var NotFoundRoute=Router.NotFoundRoute;
var AppBaseView= require('./app/layout');
var NotViewFound=require('./404/layout');
var HomeView= require('./home/layout');
var LoginPage=require('./login/layout');
var SignupPage=require('./register/layout');

var routes = (
	<Route name="baseAppRouter" path="/" handler={AppBaseView}>
	   <DefaultRoute handler={HomeView} />
	   <NotFoundRoute handler={NotViewFound} />
	   <Route name="login" handler={LoginPage} />
	   <Route name="signup" handler={SignupPage} />
	</Route>
	);

module.exports= routes;