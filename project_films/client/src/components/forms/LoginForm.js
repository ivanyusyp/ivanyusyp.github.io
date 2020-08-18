import React, { Component } from "react";

class LoginForm extends Component {

	render() {
		return (
			<div class="ui form">
				<div class="ui center aligned segment">
					Login
				</div>
				<div class="field">
					<label>E-mail</label>
					<div class="ui left icon input">
						<input type="email" placeholder="E-mail" />
						<i class="mail icon"></i>
					</div>
				</div>
				<div class="field">
					<label>Password</label>
					<div class="ui left icon input">
						<input type="password" placeholder="Password" />
						<i class="lock icon"></i>
					</div>
				</div>
				<div class="ui blue submit button">OK</div>
				<div class="ui red submit button">Cancel</div>
			</div>
		)
	}
}

export default LoginForm