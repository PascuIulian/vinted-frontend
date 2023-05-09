import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer/";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("");

  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 14 });
      setToken(token);
    } else {
      Cookies.remove("userToken");
      setToken(null);
    }
  };
  return (
    <Router>
      <Header
        handleToken={handleToken}
        token={token}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />
      <Routes>
        <Route path="/" element={<Home search={search} sort={sort} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
