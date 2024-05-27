import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  state = {
    visible: true,
  };

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <>
        <button className={'btn'} onClick={this.toggle}>
          toggle
        </button>
        <div className={'clock-container'}>
          {this.state.visible && (
            <Clock location="New York" offset={-5} interval={1000} />
          )}
          {this.state.visible && (
            <Clock location="Kyiv" offset={2} interval={1000} />
          )}
          {this.state.visible && (
            <Clock location="London" offset={0} interval={1000} />
          )}
        </div>
      </>
    );
  }
}

export default App;
