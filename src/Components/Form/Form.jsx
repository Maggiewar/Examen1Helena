import { useState } from "react";
import Card from "../Card/Card";

// email, pass, roll
//estado
//onchange
//onsubmit
// validar email have@
//validar que el password + 4 letras
// si no esta valido, al dar submit mostrar una alerta

const Form = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    nivel: "",
  });

  const [error, setError] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [mostrarCard, setMostrarCard] = useState(false);

  const handleChange = (e, propiedad) => {
    setUser({ ...user, [propiedad]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const masDeTres = user.email.length >= 3;

    const noEspacios = user.email.trim();
    if (!masDeTres) {
      setError(true);
      setErrorMessage("Error");
      return;
    }
    setMostrarCard(true);
    console.log("data", user);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={(e) => handleChange(e, "email")}
        />
        {error && <span>{errorMessage}</span>}
        <input
          type="text"
          name="password"
          onChange={(e) => handleChange(e, "password")}
        />
        <select onChange={(e) => handleChange(e, "nivel")}>
          <option value="Básico" default>
            Básico
          </option>
          <option value="intermedio" default>
            Intermedio
          </option>
          <option value="Avanzado" default>
            Avanzado
          </option>
        </select>
        <button type="submit">Enviar</button>
      </form>
      {mostrarCard && (
        <Card email={user.email} password={user.password} nivel={user.nivel} />
      )}
    </div>
  );
};

export default Form;
