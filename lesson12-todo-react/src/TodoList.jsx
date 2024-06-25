import React from 'react';
import TaskList from './TaskList';

class TodoList extends React.Component {
  render() {
    return (
      <>
        <h1 className={'title'}>Todo List</h1>
        <TaskList />
      </>
    );
  }
}

export default TodoList;
