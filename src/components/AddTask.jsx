import { useState } from 'react';

import CustomInput from './CustomInput';

import './AddTask.scss';

const AddTask = () => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar Tarefa..."
        value={task}
        onChange={handleChange}
      />
    </div>
  );
};

export default AddTask;
