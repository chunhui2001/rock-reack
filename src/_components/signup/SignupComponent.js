import React, { Component } from "react";
import PropTypes from "prop-types";       // npm install --save prop-types

const propTypes = {
  onSignupCompleted: PropTypes.func
};

const defaultProps = {
  
};

/**
  * 用户注册
  **/
class SignupComponent extends Component {

	style = {
		backgroundColor: 'blue',maxWidth: '325px',minHeight: '450px'
	}

	componentWillMount() {


	}

	componentDidMount() {

	}

	componentWillUpdate(prevProps, prevState) {
		// console.log(this.props, this.state, prevProps, prevState, 'componentWillUpdated');
	}

	constructor(props) {

	    super(props);

	    this.state = {
	      title: "用户注册"
	    };


    	this.onSignup  = this.onSignup.bind(this); 

	}

	onSignup() {

		const { onSignupCompleted } = this.props;
		onSignupCompleted(true);
	
	}


	render() {

		// return (
		//   <div className="SignupComponent" style={this.style}>
		//     <h3 style={{margin:0, color:'white'}}>{this.state.title}</h3>
		//     <button onClick={this.onSignup}>
		//       登陆
		//     </button>
		//   </div>
		// );

		return (
			<div className="login-card card">
		      <div className="card-header">
		        <h3>用户登陆</h3>
		      </div>
		      <div className="card-body">
		        <form>
		          <div className="input-group form-group">
		            <div className="input-group-prepend">
		              <span className="input-group-text"><i className="fas fa-user"></i></span>
		            </div>
		            <input type="text" className="form-control" placeholder="username" />
		          </div>
		          <div className="input-group form-group">
		            <div className="input-group-prepend">
		              <span className="input-group-text"><i className="fas fa-key"></i></span>
		            </div>
		            <input type="password" className="form-control" placeholder="password" />
		          </div>
		          <div className="form-group">
		            <input type="submit" value="Login" className="btn float-right login_btn" />
		          </div>
		        </form>
		      </div>
		    </div>
			);
	}

}


SignupComponent.propTypes = propTypes;
SignupComponent.defaultProps = defaultProps;

export default SignupComponent;

