import React from "react";
import { Link } from "react-router-dom";
import "../style/Categorie_card.css";
import "../style/list.css"


function Categorie_card({ categorie }) {
  return (
    <Link to={`/Categories/${categorie.name}`} className='lii'>
      <div className="card">
        <img src={categorie.image} className="im" />
        <h3>{categorie.name}</h3>{" "}
        
      </div>
    </Link>
  );
}

export default Categorie_card;
