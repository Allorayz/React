import React from 'react';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <div className={'create-task'}>
        <input
          type="text"
          value={this.state.value}
          className={'create-task__input'}
          onChange={this.handleChange}
        />
        <button
          className={'btn create-task__btn'}
          onClick={this.handleTaskCreate}
        >
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;

// 1. Take input value
// 2. Create task with input value
// 3. add to exist list
