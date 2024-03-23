import { useEffect, useState } from 'react';
import axios from 'axios';

import './Task.scss';

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    try {
      const { data } = await axios.get('http://localhost:8000/tasks');
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
        <div className="tasks-list">
          {tasks
            .filter((task) => !task.isCompleted)
            .map((lastTask) => (
              <p key={lastTask._id}>{lastTask.description}</p>
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <p key={completedTask._id}>{completedTask.description}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
