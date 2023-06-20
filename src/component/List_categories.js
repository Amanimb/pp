import React from "react";
import Categorie_card from "./Categorie_card";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function List_categories({ product, search, categories }) {
  const { id } = useParams();
  
  return (
    <div className="list">
      <Link to={`/Categories/GroupePond`} className="lii">
        <div className="card">
          <img src="../image_categorie/pond.png" className="im" />
          <h3>Groupe Pond</h3>{" "}
        </div>
      </Link>
      <Link to={`/Categories/GroupeBoite`} className="lii">
        <div className="card">
          <img src="../image_categorie/boite.png" className="im" />
          <h3>Groupe Boite</h3>{" "}
        </div>
      </Link>
      <Link to={`/Categories/GroupeMoteur`} className="lii">
        <div className="card">
          <img src="../image_categorie/Moteur.jpg" className="im" />
          <h3>Groupe Moteur</h3>{" "}
        </div>
      </Link>
      <Link to={`/Categories/GroupeHydraulique`} className="lii">
        <div className="card">
          <img src="../image_categorie/hydro.jpg" className="im" />
          <h3>Groupe Hydraulique</h3>{" "}
        </div>
      </Link>
      <Link to={`/Categories/GroupeHydraulique`} className="lii">
        <div className="card">
          <img src= "../image_categorie/ÉTIQUETTE.jpg" className="im" />
          <h3>Groupe Cabine</h3>{" "}
        </div>
      </Link>
      
      
    </div>
  );
}

export default List_categories;
