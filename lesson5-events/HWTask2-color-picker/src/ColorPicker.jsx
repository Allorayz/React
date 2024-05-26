import React from 'react';

const colors = {
  coral: 'Coral',
  aqua: 'Aqua',
  bisque: 'Bisque',
};

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  setTextOnHover = color => {
    this.setState({
      text: color,
    });
  };

  clearText = () => {
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.text}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.setTextOnHover(colors.coral)}
            onMouseOut={() => this.clearText()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.setTextOnHover(colors.aqua)}
            onMouseOut={() => this.clearText()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.setTextOnHover(colors.bisque)}
            onMouseOut={() => this.clearText()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
