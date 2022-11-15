import React from "react";

import { FaTimes } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
const Card = ({ task, onDelete, onToggle }) => {
  console.log(task);
  const styles = {
    card: {
      backgroundColor: "rgb(235, 235, 235)",
      borderRadius: 6,
      width: "40vh",
      margin: "0.5em",
      color: "rgb(36, 36, 36)",
      padding: "0.1em 0.8em",
      fontWeight: "600",
      boxShadow: "13px 8px 29px 0px rgba(0, 0, 0, 0.6)",
    },
  };

  return (
    <>
      <div style={styles.card} onDoubleClick={() => onToggle(task.id)}>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <h3>{task.title}</h3>
        </div>
        {task.completed ? (
          <TiTick style={{ color: "green" }} />
        ) : (
          <FaTimes
            style={{
              color: "red",
            }}
          />
        )}
      </div>
    </>
  );
};

export default Card;
