import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  const navigate = useNavigate();

  const [photo, setPhoto] = useState();
  const [titre, setTitre] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [marque, setMarque] = useState("");
  const [taille, setTaille] = useState("");
  const [couleur, setCouleur] = useState("");
  const [etat, setEtat] = useState("");
  const [lieu, setLieu] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("picture", photo);
      formData.append("title", titre);
      formData.append("price", prix);
      formData.append("description", description);
      formData.append("brand", marque);
      formData.append("size", taille);
      formData.append("color", couleur);
      formData.append("condition", etat);
      formData.append("city", lieu);
      const response = await axios.post(
        "https://site--backend-vinted-project--qq6svdx7d7wt.code.run/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container publish">
      <h1
        style={{
          fontSize: "32px",
          border: "2px solid",
          width: "265px",
          borderRadius: "10px",
          padding: "10px",
          marginBottom: "10px",
        }}
        className="green"
      >
        Vends ton article
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="file-div publish-form">
          <input
            type="file"
            onChange={(event) => {
              setPhoto(event.target.files[0]);
            }}
          />
        </div>

        <div className="first-div publish-form">
          <input
            type="text"
            placeholder="Titre ex:Chemise Sézane verte"
            value={titre}
            onChange={(event) => {
              setTitre(event.target.value);
            }}
            className="publish-titre"
          ></input>
          <input
            type="text"
            placeholder="Description ex: porté quelquefois, taille correctement
            "
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            className="publish-description"
          ></input>
        </div>
        <div className="second-div publish-form">
          <input
            type="text"
            placeholder="Marque ex: Zara"
            value={marque}
            onChange={(event) => {
              setMarque(event.target.value);
            }}
            className="publish-marque"
          ></input>
          <input
            type="text"
            placeholder="Taille ex: L / 40 / 12"
            value={taille}
            onChange={(event) => {
              setTaille(event.target.value);
            }}
            className="publish-taille"
          ></input>
          <input
            type="text"
            placeholder="Couleur ex: Rouge"
            value={couleur}
            onChange={(event) => {
              setCouleur(event.target.value);
            }}
            className="publish-couleur"
          ></input>
          <input
            type="text"
            placeholder="Etat ex: Neuf avec étiquette"
            value={etat}
            onChange={(event) => {
              setEtat(event.target.value);
            }}
            className="publish-etat"
          ></input>
          <input
            type="text"
            placeholder="Lieu ex: Paris"
            value={lieu}
            onChange={(event) => {
              setLieu(event.target.value);
            }}
            className="publish-lieu"
          ></input>
        </div>
        <div className="third-div publish-form">
          <input
            type="text"
            placeholder="0,00 €"
            value={prix}
            onChange={(event) => {
              setPrix(event.target.value);
            }}
            className="publish-prix"
          ></input>
          <input type="submit" value="Poster une offre" className="submit" />
        </div>
      </form>
    </div>
  );
};

export default Publish;
