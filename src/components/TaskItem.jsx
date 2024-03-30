import axios from 'axios';
import { toast } from 'react-toastify';
import { AiFillDelete } from 'react-icons/ai';

import { api } from '../utils/config';

import './TaskItem.scss';

const TaskItem = ({ task, fetchTask }) => {
  const handleTaskDelete = async () => {
    try {
      await axios.delete(`${api}/${task._id}`);

      await fetchTask();

      toast.success('Tarefa deletada');
    } catch (error) {
      toast.error('Algo deu errado');
    }
  };

  return (
    <div className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.isCompleted
              ? 'checkbox-container-completed'
              : 'checkbox-container'
          }
        >
          {task.description}
          <input type="checkbox" defaultChecked={task.isCompleted} />
          <span
            className={task.isCompleted ? 'checkmark completed' : 'checkmark'}
          ></span>
        </label>
      </div>

      <div className="delete">
        <AiFillDelete size={18} color="#F97474" onClick={handleTaskDelete} />
      </div>
    </div>
  );
};

export default TaskItem;
