import React, { useState } from 'react'
import List_categories from '../component/List_categories';
import Trax from '../component/Trax';
import '../style/Categorie_card.css'
import '../style/list.css'



function Categories() {
    const [Categories, setCategories] = useState([
      {
        image: "../image_categorie/GROUPE DE FONTE LOURDE.jpg",
        name: "GROUPE DE FONTE LOURDE",
      },
      {
    
        image: "../image_categorie/GROUPE DE CATERPİLLAR.jpg",
        name: "GROUPE DE CATERPİLLAR",
      },
      {
        image: "../image_categorie/GROUPE DE ZF HİDROMEK.jpg",
        name: "GROUPE DE ZF HİDROMEK",
      },
      {
        image: "../image_categorie/RADIATEUR et GROUPE DE REFROIDISSEMENT.jpg",
        name: "RADIATEUR et GROUPE DE REFROIDISSEMENT",
      },
      {
        image: "../image_categorie/ÉTIQUETTE.jpg",
        name: "ÉTIQUETTE",
      },
      {
        image: "../image_categorie/Autres.jpg",
        name: "Autres",
      },
      {
        image: "../image_categorie/GROUPE DE PIÈCES CARRARO.jpg",
        name: "GROUPE DE PIÈCES CARRARO",
      },
      {
        image: "../image_categorie/PIÈCES DE MOTEUR.jpg",
        name: "PIÈCES DE MOTEUR",
      },
      {
        image: "../image_categorie/GROUPE BOUTON.png",
        name: "GROUPE BOUTON",
      },
      {
        image: "../image_categorie/GROUPE D'ESSİEUX.jpg",
        name: "GROUPE D'ESSİEUX",
      },
    ]);
  return (
    <div className="nos-p">
      <Trax title="Nos Produits" />
      <div className="list">
        <List_categories categories={Categories} />
      </div>
    </div>
  );
}

export default Categories