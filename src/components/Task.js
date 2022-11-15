import React from "react";
import { FaTimes } from "react-icons/fa";
const task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task-info-input task-input
       ${task.reminder ? "reminder " : " "}
      
      `}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.title}
        <FaTimes
          className='right-list'
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
    </div>
  );
};

task.propTypes = {};

export default task;
