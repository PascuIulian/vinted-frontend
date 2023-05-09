import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://site--backend-vinted-project--qq6svdx7d7wt.code.run/user/login",
        {
          email: email,
          password: password,
        }
      );
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formulaire">
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="fill"
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className="fill"
        />
        <input type="submit" value="Se connecter" className="button-form" />
        <Link to="/singup" className="green">
          Pas encore de compte ? Inscris-toi !
        </Link>
      </form>
    </div>
  );
};

export default Login;
