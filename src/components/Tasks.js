import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onToggle, onDelete, onChange }) => {
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <Task 
            key={`key-${index}`}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onChange={onChange}
          />
        );
      })}
    </>
  );
};

export default Tasks;
