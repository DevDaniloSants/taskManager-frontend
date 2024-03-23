const TaskItem = ({ task }) => {
  return (
    <div>
      <h1>{task.description}</h1>
      <p>{task.isCompleted ? 'Completa' : 'Não completada'}</p>
    </div>
  );
};

export default TaskItem;
