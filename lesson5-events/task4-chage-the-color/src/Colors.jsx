import React from 'react';

const colors = {
  RED: '#f00',
  GREEN: '#0f0',
  BlUE: '#00f',
};

class Colors extends React.Component {
  setBGcolor = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className={'colors'}>
        <button
          className={'colors__button'}
          style={{ backgroundColor: colors.RED }}
          onClick={() => this.setBGcolor(colors.RED)}
        ></button>
        <button
          className={'colors__button'}
          style={{ backgroundColor: colors.GREEN }}
          onClick={() => this.setBGcolor(colors.GREEN)}
        ></button>
        <button
          className={'colors__button'}
          style={{ backgroundColor: colors.BlUE }}
          onClick={() => this.setBGcolor(colors.BlUE)}
        ></button>
      </div>
    );
  }
}

export default Colors;
