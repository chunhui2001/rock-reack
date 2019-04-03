import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


import SignupComponent from './_components/signup/SignupComponent';


class App extends Component {

  onSignupCompleted(result) {
    
    if (result) {
      alert("注册成功");
      return ;
    } 

    alert("注册失败");

  }

  render() {
    return (
      <div className="App">
        
        <SignupComponent onSignupCompleted={this.onSignupCompleted} />

      </div>
    );
  }
}

export default App;
