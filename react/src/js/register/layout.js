var React = require('react');
var AjaxSupport= require('../ajax/ajaxsupport');

var Register=React.createClass({
     getInitialState:function(){
      return {
        username:null,
        password:null,
        rpassword:null,
        email:null
      }
      
       }
        , isValidInputValue: function(inputValue){

          if(!inputValue || inputValue.trim().length===0){
             return true;
       }
          return false;
      }

      , usernameChangeHandler: function(event){
          var usernameValue= event.target.value;
          if(!this.isValidInputValue(usernameValue)){
            usernameValue=null;}
          this.setState({username:usernameValue});
             
     }

        , passwordChangeHandler: function(event){
          var passwordValue= event.target.value;
          if(!this.isValidInputValue(passwordValue)){
            passwordValue=null;
          this.setState({password:passwordValue});
             }
     }

     , rpasswordChangeHandler: function(event){
          var rpasswordValue= event.target.value;
          if(!this.isValidInputValue(rpasswordValue)){
            rpasswordValue=null;
          this.setState({rpassword:rpasswordValue});
             }
     }

     , emailChangeHandler: function(event){
          var emailValue= event.target.value;
          if(!this.isValidInputValue(emailValue)){
            emailValue=null;
          this.setState({email:emailValue});
             }
     }

     , formSubmitHandler: function(event) {
          event.preventDefault();
          console.log(this.state);

          if(this.isValidStateForSubmit()) {
            AjaxSupport.post( {
              url:'/users'
              ,data:JSON.stringify({
                username:this.state.username
                ,password:this.state.password
                ,email:this.state.password
                
              })
              ,success:function(){
                console.log('request success');

              },
              error:function(data){
                debugger;
                console.log('my request failed');
              }
            });
            alert("Form is ready for submit");
          }
          else {
            alert('there are some issues with form');
          }
        }


     , isValidStateForSubmit: function() {
          return this.state.username && this.state.password && this.state.rpassword && this.state.email && (this.state.password === this.state.rpassword)
     }

   , render: function(){
      return(
      <div id ="register">
        <h1>Register</h1>
        
          <div id="usernameLabel">
            <label for="username">Username</label>
            <input type="text" name="username" onChange={this.usernameChangeHandler}/>
          </div>
          <div id ="passwordLabel">
            <label for="password">Password</label>
            <input type="Password " name="password" onChange={this.passwordChangeHandler}/>
          </div> 
          <div id ="rpasswordLabel">
            <label for="rpassword">RPassword</label>
            <input type="Password " name="rpassword" onChange={this.rpasswordLabel}/>
          </div>
          <div id="emaillabel">
            <label for="email"> E-mail</label>
            <input type="email" name="email" onChange={this.emailChangeHandler}/>
          </div>
          <button id="signupbutton" type="submit" onClick={this.formSubmitHandler}>Sign Up</button>
          <div>
             <a href="http://localhost:3002/#/login">Login</a>
          </div>
        
      </div>
    );
  }   
});

module.exports=Register;