import React from 'react'
import "../style/Categorie_card.css";
 

function Product_Card({product}) {
  return (
    <div className="card">
      <img src={product.image} className="im" />
      <h3 className="txt">{product.name}</h3>
      <h4 id='r'>Réference : {product.reference}</h4>
    </div>
  );
}

export default Product_Card