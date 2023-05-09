import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = ({ handleToken, token, search, setSearch, sort, setSort }) => {
  return (
    <header className="container">
      <Link to="/">
        <img src={logo} alt="Vinted logo" />
      </Link>
      <div>
        <button
          className={sort === "price-asc" ? "blue" : "white"}
          onClick={() => {
            setSort("price-asc");
          }}
        >
          ^
        </button>
        <button
          className={sort === "price-desc" ? "blue" : "white"}
          onClick={() => {
            setSort("price-desc");
          }}
        >
          v
        </button>
      </div>
      <input
        placeholder=" &#128269;    Rechercher des articles ..."
        type="text"
        className="search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {!token ? (
        <>
          <Link to="/signup">
            <button className="button-1 button">S'inscrire</button>
          </Link>
          <Link to="/login">
            <button className="button-1 button">Se connecter</button>
          </Link>
        </>
      ) : (
        <Link to="/">
          <button
            onClick={() => {
              handleToken();
            }}
            className="button-2 button"
          >
            Deconexion
          </button>
        </Link>
      )}
      {!token ? (
        <Link to="/login">
          <button className="button-3 button">Vends tes articles</button>
        </Link>
      ) : (
        <Link to="/publish">
          <button className="button-3 button">Vends tes articles</button>
        </Link>
      )}
    </header>
  );
};

export default Header;
