import React from "react";
import Card from "./Card";
const Cards = ({ cards, onToggle, onDelete }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cards.map((card, index) => {
        return (
          <Card
            key={`key-${index}`}
            task={card}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default Cards;
