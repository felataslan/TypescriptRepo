import { Typography, Button } from "@mui/material";
import { useState } from "react";

const State = () => {
  const [clicked, setClicked] = useState("");
  const [name, setName] = useState("felat");

  const handleClick = () => {
    setClicked("butona tıklandı");
    setName("escobar");
    console.log(clicked);
  };

  return (
    <>
      <Typography marginRight={2}>Merhaba ben {name} </Typography>
      <Button type="button" onClick={handleClick}>
        Tıkla{" "}
      </Button>
    </>
  );
};

export default State;
