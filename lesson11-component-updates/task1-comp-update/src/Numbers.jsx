import React from 'react';
import PropTypes from 'prop-types';

class Numbers extends React.PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   if (this.props.number === nextProps.number && this.props.title === nextProps.title) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    const { number, title } = this.props;
    return (
      <div className="number">
        <span className="number__title">{title}</span>
        <span className="number__value">{number}</span>
      </div>
    );
  }
}

Numbers.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired,
};

Numbers.defaultTypes = {
  title: 'Some number',
};

export default Numbers;
