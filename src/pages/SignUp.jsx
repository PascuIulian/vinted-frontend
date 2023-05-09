import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleCheckboxChange = () => {
    setNewsletter(!newsletter);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://site--backend-vinted-project--qq6svdx7d7wt.code.run/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="formulaire">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            className="fill"
          />
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
          <div className="checkbox">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="newsletter">S'inscrire à notre newsletter</label>
          </div>
          <p className="grey">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <input type="submit" value="S'inscrire" className="button-form" />
        </form>
        <Link to="/login" className="green">
          Tu as déjà un compte ? Connecte-toi !
        </Link>
      </div>
    </div>
  );
};

export default Signup;
