import React from 'react';

class Dimensions extends React.Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerWidth, innerHeight } = window;
    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('rezize', this.onResize);
  }

  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${width} x ${height}`;
  };

  render() {
    const { width, height } = this.state;
    return <div>{`${width} x ${height}`}</div>;
  }
}

export default Dimensions;
