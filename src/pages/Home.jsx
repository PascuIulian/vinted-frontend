import { useState, useEffect } from "react";
import axios from "axios";
import Article from "../components/Article";

const Home = ({ search, sort }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-vinted-project--qq6svdx7d7wt.code.run/offers?title=${search}&sort=${sort}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, sort]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="container">
      <p>Nombre d'offre : {data.count}</p>
      <div className="box-articles">
        {data.offers.map((offer) => {
          return <Article key={offer._id} offer={offer} />;
        })}
      </div>
    </div>
  );
};

export default Home;
