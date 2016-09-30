var React = require('react');
//var Link=Router.Link;

var LoginPage=React.createClass({
	render: function(){
		return(
           <div id="login">  
              <h1>Login</h1>
              
                 <div>
                     <p>
                     <label for="username"> <b>Username</b></label> </p>
                     <input type="text" id="username"/>
                  </div>
                  <div>
                     <p>
                     <label for="password"><b>Password</b></label> </p>
                     <input type="password" id="password"/>
                  </div>
                  <p>
                 <button id="loginbutton" type="submit">Login </button></p>
                 <div>
                 <a href="http://localhost:3002/#/signup">Register Now </a>
                 </div>
               
               </div>
               );
               }
               });  
module.exports=LoginPage;
