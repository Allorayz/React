import React from 'react';

class Search extends React.Component {
  state = {
    value: '',
  };

  onHandleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  messageSubmit = event => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form onSubmit={this.messageSubmit} className="search">
        <input
          value={this.state.value}
          onChange={this.onHandleChange}
          type="text"
          className="search__input"
        />
        <button className="search__button">Search</button>
      </form>
    );
  }
}

export default Search;
