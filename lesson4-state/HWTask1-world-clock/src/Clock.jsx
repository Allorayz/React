import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset),
  );
};

const formatDate = date => moment(date).format('LTS');

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
    };

    setInterval(() => {
      this.setState({
        timeZone: formatDate(getTimeWithOffset(props.offset)),
      });
    }, props.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.timeZone}</div>
      </div>
    );
  }
}

export default Clock;
