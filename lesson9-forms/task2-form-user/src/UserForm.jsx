import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      student: '',
      occupation: '',
      about: '',
    };
  }

  handleChange = e => {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: newValue,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { name, student, occupation, about } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <h1 className="form-title">Profile</h1>

        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            onChange={this.handleChange}
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={name}
          />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            onChange={this.handleChange}
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
            value={student}
          />
        </div>

        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            onChange={this.handleChange}
            name="occupation"
            className="form-input"
            value={occupation}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>

        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            onChange={this.handleChange}
            name="about"
            className="form-input"
            value={about}
          ></textarea>
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
