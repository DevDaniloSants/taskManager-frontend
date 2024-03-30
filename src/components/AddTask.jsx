import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

import { api } from '../utils/config';

import './AddTask.scss';

const AddTask = ({ fetchTask }) => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return toast.error('A tarefa precisa ter uma descrição');
      }

      await axios.post(api, {
        description: task,
        isCompleted: false,
      });

      await fetchTask();
      setTask('');

      return toast.success('Tarefa adiciona com sucesso');
    } catch (error) {
      toast.error('Algo deu errado');
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar Tarefa..."
        value={task}
        onChange={handleChange}
      />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus />
      </CustomButton>
    </div>
  );
};

export default AddTask;
