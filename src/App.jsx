import { useEffect, useState } from 'react';
import axios from 'axios';

import TaskItem from './components/TaskItem';

const App = () => {
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
    <div>
      <h1>Tarefas</h1>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default App;
