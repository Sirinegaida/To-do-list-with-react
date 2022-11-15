import React from "react";
import { useState } from "react";
import Submit from "./Submit";

const Add = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [cards, setCards] = useState([]);
  const [tasks, setTasks] = useState([]);

  
  const checked = (e) => {
    setCompleted(e.target.id == "yes");
  };

  const onSave = (e) => {
    e.preventDefault();

    if (!reminder) {
      alert("please check the reminder ");
    }

    if (!text) {
      alert("please add a task");
      return;
    }
    onAdd({ title: text, date, reminder, completed });
    setText("");
    setDate("");
    setReminder(false);
    setCompleted(false);
    setTasks([...tasks]);
    setCards([tasks, ...cards]);
  };
  const card = {
    height: "auto",
    width: "410px",
    boxShadow: "13px 8px 29px 0px rgba(0, 0, 0, 0.6)",

    backgroundColor: "rgb(172, 160, 209)",
    borderRadius: "10px",
    padding: "20px 20px",
    boxSizing: "border-box",
    fontFamily: "'Poppins', sans-serif",
  };
  const textarea = {
    resize: "none",
    marginTop: "10px 10px 10px",
    height: "px",
    width: "380px",
    borderRadius: "5px",
    border: " 2px solid pink",
    padding: "15px",
    boxSizing: "border-box",
    fontSize: "15px",
    paddingRight: "15px",
    fontFamily: "sans-serif",
  };
  const addCard = async (card) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newCard = { id, ...card };
    setTasks([newCard, ...cards]);

    setCards([newCard, ...cards]);
  };

  return (
    <form style={{ width: "100%" }} className='add-form' onSubmit={onSave}>
      <div>
        <div style={card}>
          <h3>Title</h3>
          <div>
            <div>
              <span>
                <input
                  style={textarea}
                  type='text'
                  placeholder='AddTask'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </span>
            </div>
            <h3 class='title'>completed or not </h3>
            <div>
              <label class='title'>yes </label>
              <input
                type='radio'
                id='yes'
                checked={completed}
                value={completed}
                onChange={checked}
              />{" "}
            </div>
            <div>
              <label class='title'>no </label>
              <input
                type='radio'
                id='no'
                checked={!completed}
                value={!completed}
                onChange={checked}
              />
            </div>
            <h3>Reminder </h3>
            <label> Set Reminder</label>
            <input
              type='checkbox'
              checked={reminder}
              placeholder='SET reminder'
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
            />
            <Submit id='submit-btn' onSubmit={addCard} />
          </div>
        </div>
      </div>
    </form>
  );
};
Add.propTypes = {};

export default Add;
