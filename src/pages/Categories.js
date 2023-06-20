import React, { useState } from 'react'
import List_categories from '../component/List_categories';
import Trax from '../component/Trax';
import '../style/Categorie_card.css'
import '../style/list.css'


function Categories({product,search}) {
    const [Categories, setCategories] = useState([
      {
        image: "../image_categorie/pond.png",
        name: " GROUPE POND ",
      },
      {
    
        image: "../image_categorie/boite.png",
        name: " GROUPE BOITE ",
      },
      {
        image: "../image_categorie/Moteur.jpg",
        name: " GROUPE MOTEUR ",
      },
      {
        image: "../image_categorie/hydro.jpg",
        name: " GROUPE HYDRAULIQUE ",
      },
      {
        image: "../image_categorie/ÉTIQUETTE.jpg",
        name: " GROUPE CABINE ",
      },
      
      
    ]);
    return (
      <div className="nos-p">
      <Trax title="Nos Produits" />
      <List_categories  product={product} search={search} />
    </div>
    );
  }
  
  export default Categories