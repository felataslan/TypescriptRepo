import React, { FC } from "react";
import "bootstrap";

interface CardProps {
  fullName?: string;
  age?: number;
}

const Card: FC<CardProps> = ({ fullName, age }) => {
  return (
    <div
      style={{
        border: "5px solid red",
        marginTop: "20px",
        textAlign: "center",
      }}
      className="col-4 "
    >
      <p>Ad: {fullName}</p>
      <p>Yaş: {age}</p>
    </div>
  );
};

export default Card;
