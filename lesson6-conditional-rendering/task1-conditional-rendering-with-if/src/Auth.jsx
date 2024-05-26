import React from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
  };

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    let button;
    button = !this.state.isLoggedIn ? (
      <Login onLogin={this.handleLogin} />
    ) : (
      <Logout onLogout={this.handleLogout} />
    );
    return (
      <div className={'panel'}>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default Auth;
