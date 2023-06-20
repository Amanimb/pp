import React from "react";
import { Link, useParams } from "react-router-dom";
import Product_Card from "../component/Product_Card";
import "../App.css";

const DetailsMoteur = ({ product, productPond, search}) => {
  const { categorie } = useParams();
  console.log(categorie);
  
  return (
    <div>
      {" "}
      <div className="retour">
        <Link to="/Categories">
        <img src="../retour.png" className="retour1" />
        </Link>
      </div>
      <div className="list">
       
          {product
          .filter((el) => el.categories === " GROUPE MOTEUR "  && (
            el?.name?.toLowerCase().includes(search.toLowerCase()) ||
            el?.reference?.toLowerCase().includes(search.toLowerCase())))
          .map((el) => (
            <Product_Card product={el} search={search} />
          ))}
      </div>
    </div>
  );
};

export default DetailsMoteur;
