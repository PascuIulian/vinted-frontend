import { Link } from "react-router-dom";

const Home = ({ offer }) => {
  const { owner, product_image, product_price, product_details } = offer;
  return (
    <Link to={`/offer/${offer._id}`}>
      <article className="one-article">
        <div className="seller">
          {owner.account.avatar && (
            <img src={owner.account.avatar.secure_url} alt="Seller profil " />
          )}
          <span className="grey">{owner.account.username}</span>
        </div>
        <img src={product_image.secure_url} alt="cloth " />
        <div className="details">
          <span>{product_price} €</span>
          {product_details.map((details, index) => {
            if (details.TAILLE) {
              return (
                <p key={index} className="grey">
                  {details.TAILLE}
                </p>
              );
            } else {
              return null;
            }
          })}
          {product_details.map((details, index) => {
            if (details.MARQUE) {
              return (
                <p key={index} className="grey">
                  {details.MARQUE}
                </p>
              );
            } else {
              return null;
            }
          })}
        </div>
      </article>
    </Link>
  );
};

export default Home;
