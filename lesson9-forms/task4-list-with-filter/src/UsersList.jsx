import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
  }

  handleChange = e => {
    this.setState({
      filterText: e.target.value,
    });
  };

  render() {
    let userList = this.props.users;
    const newUserList = userList.filter(user => {
      if (
        user.name.toLowerCase().includes(this.state.filterText.toLowerCase())
      ) {
        return user;
      }
      return '';
    });

    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={newUserList.length}
          onChange={this.handleChange}
        />
        <ul className="users">
          {newUserList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
