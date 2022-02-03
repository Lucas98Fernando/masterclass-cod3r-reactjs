import React, { useState } from "react";

export default function Input(props) {
  const [name, setName] = useState("Lucas");
  return (
    <>
      <h3>{name}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}
