import { useEffect, useState } from 'react';
import axios from 'axios';

import TaskItem from './TaskItem';
import AddTask from './AddTask';

import { api } from '../utils/config';

import './Task.scss';

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    try {
      const { data } = await axios.get(api);
      setTasks(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas Tarefas</h3>
        <AddTask />
        <div className="tasks-list">
          {tasks
            .filter((task) => !task.isCompleted)
            .map((lastTask) => (
              <TaskItem key={lastTask._id} task={lastTask} />
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <TaskItem key={completedTask._id} task={completedTask} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
