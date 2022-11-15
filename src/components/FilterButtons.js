import React from "react";
import Tasks from "./Tasks";
import { useState } from "react";
const FilterButtons = ({ onClick, onShowArchive }) => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  //update_reminder
  const toggleReminder = (id) => {
    setTasks(
      (tasks.map = (task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task)
    );
  };
  //Delete_Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <button
        style={{ backgroundColor: "gray" }}
        onClick={() => {
          onClick("completed");
          onShowArchive(false);
        }}
        className='btn'
      >
        completed
      </button>
      <button
        style={{ backgroundColor: "gray" }}
        onClick={() => {
          onClick("not completed");
          onShowArchive(false);
        }}
        className='btn'
      >
        Not completed
      </button>
      <button
        className='btn'
        style={{ backgroundColor: "gray" }}
        onClick={() => onShowArchive(true)}
      >
        Archive
      </button>
    </div>
  );
};
export default FilterButtons;
