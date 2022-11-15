import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Tasks from "./components/Tasks";
import Add from "./components/Add";
import Cards from "./components/Cards";
import FilterButtons from "./components/FilterButtons";
import Button from "./components/Button";
const App = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [cards, setCards] = useState([]);
  const [showArchive, setShowArchive] = useState(false);

  //fetch_tasks
  const getTasks = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setTasks(data);
    setCards(data);
    setLoading(false);
  };

  useEffect(async () => {
    await getTasks(); //get the data from server
  }, []); //every time we loa the page we have a call dele getTasks

  //update_reminder
  const toggleReminder = (id) => {
    setTasks(
      (tasks.map = (task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task)
    );
  };

  //add_task
  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };
    setTasks([newTask, ...tasks]);
    setCards([newTask, ...tasks]);
  };

  //Delete_Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onFilter = (type) => {
    setCards(tasks.filter((task) => task.completed === (type === "completed")));
  };

  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <Header />
      </div>
      <div className='dashboard-body'>
        <div className='dashboard-left'>
          <div
            style={{
              width: "70%",
              margin: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button color=' rgb(10, 6, 22)' text='Add' />
          </div>

          <div className='left-task'>
            <Add onAdd={addTask} />
          </div>
        </div>

        <div className='dashboard-right'>
          {/*props_passing*/}
          <FilterButtons onShowArchive={setShowArchive} onClick={onFilter} />
          {!showArchive && <Cards cards={cards.slice(0, 100)} />}{" "}
          {/*take from 0 to 100 first tasks*/}
          {!loading ? (
            <Tasks
              onToggle={toggleReminder}
              tasks={tasks}
              onDelete={deleteTask}
            />
          ) : (
            "no such file "
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
