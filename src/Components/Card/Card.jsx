import React from "react";

const Card = ({ nivel, password, email }) => {
  return (
    <div>
      <h2>Hola qué tal tu email es: {email}</h2>
      <h2>tu contraseña es: {password} </h2>
      <h2>tu nivel es: {nivel}</h2>
    </div>
  );
};

export default Card;
