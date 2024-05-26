import React from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component {
  state = {
    isOnline: false,
  };

  setStatus = () => {
    let newStatus = this.state.isOnline === false ? true : false;
    console.log(newStatus);
    this.setState({
      isOnline: newStatus,
    });
  };

  render() {
    return (
      <div className={'status'}>
        {!this.state.isOnline ? <Offline /> : <Online />}
        <button className="status__btn" onClick={() => this.setStatus()}>
          Reconnect
        </button>
      </div>
    );
  }
}

export default Status;
