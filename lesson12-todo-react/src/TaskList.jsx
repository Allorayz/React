import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask,
} from './TasksGateway';

class TaskList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList => this.setState({ tasks: tasksList }));
  };

  onCreate = text => {
    const newTask = {
      text,
      done: false,
    };
    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = id => {
    const { text, done } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      ...text,
      done: !done,
    };
    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleDelete = id => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className={'todo-list'}>
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className={'list'}>
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.handleDelete}
              onChange={this.handleTaskStatusChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
