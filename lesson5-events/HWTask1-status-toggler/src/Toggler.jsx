import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultToggle: 'Off',
    };
  }

  setNewToggle = e => {
    // const isToggle = () => {
    //   if (this.state.defaultToggle === 'Off') {
    //     return (this.state.defaultToggle = 'On');
    //   } else {
    //     return (this.state.defaultToggle = 'Off');
    //   }
    // };

    const newToggle = this.state.defaultToggle === 'Off' ? 'On' : 'Off';
    this.setState({
      // defaultToggle: isToggle(this.state.defaultToggle),
      defaultToggle: newToggle,
    });
  };

  render() {
    return (
      <button className="toggler" onClick={() => this.setNewToggle()}>
        {this.state.defaultToggle}
      </button>
    );
  }
}

export default Toggler;
