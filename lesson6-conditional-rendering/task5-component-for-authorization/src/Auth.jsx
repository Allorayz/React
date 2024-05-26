import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    loading: false,
  };

  handleLogin = () => {
    this.setState({
      loading: true,
    });
    setTimeout(
      () =>
        this.setState({
          loading: false,
          isLoggedIn: true,
        }),
      2000,
    );
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn, loading } = this.state;
    if (loading) {
      return <Spinner size={'100px'} />;
    }
    return (
      <>
        {!isLoggedIn && <Login onLogin={this.handleLogin} />}
        {isLoggedIn && <Logout onLogout={this.handleLogout} />}
      </>
    );
  }
}
export default Auth;
