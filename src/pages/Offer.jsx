import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-vinted-project--qq6svdx7d7wt.code.run/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="container offer-page">
      <img src={data.product_image.secure_url} alt="" />
      <div className="offer-details">
        <span className="offer-price">{data.product_price} €</span>
        {data.product_details.map((detail, index) => {
          const keyName = Object.keys(detail);
          console.log(detail);
          console.log(keyName);
          return (
            <div key={index} className="single-details">
              <span>{keyName} :</span>
              <span>{detail.keyName}</span>
            </div>
          );
        })}
        <p className="offer-name">{data.product_name}</p>
        <p className="offer-description">{data.product_description}</p>
        <div className="seller-profile">
          {data.owner.account.avatar && (
            <img
              src={data.owner.account.avatar.secure_url}
              alt="Seller profil"
            />
          )}
          <span>{data.owner.account.username}</span>
        </div>
      </div>
    </div>
  );
};

export default Offer;
