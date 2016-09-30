var React = require('react');

var HomePage=React.createClass({
	render: function(){
		return(
						<table className="table">
				<thead>
					<tr>
							<h2> Welcome! </h2>
							<a href="http://localhost:3002/#/login">
							<button id="buttonGoLogin" type="submit" className="buttonGoLogin">Login</button></a>

							<a href="http://localhost:3002/#/signup">
							<button type="submit" className="buttonGoLogin">Sign Up</button> </a>
					</tr>
				</thead>
				<tbody id="user-data-container">
					
				</tbody>	
			</table>
			

			);
	}
});

module.exports=HomePage;

/*<th># </th>
						<th>First name </th>
						<th> </th>
						<th>Last name </th>
						<th>Username </th>*/