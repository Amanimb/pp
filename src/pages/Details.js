import React from "react";
import { Link, useParams } from "react-router-dom";
import Product_Card from "../component/Product_Card";
import "../App.css";

const Details = ({ product }) => {
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
          .filter((el) => el.categories == categorie)
          .map((el) => (
            <Product_Card product={el} />
          ))}
      </div>
    </div>
  );
};

export default Details;
