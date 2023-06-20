import React, { useState } from 'react'
import List_categories from '../component/List_categories';
import Trax from '../component/Trax';
import '../style/Categorie_card.css'
import '../style/list.css'


function Categories({product,search}) {
  
    return (
      <div className="nos-p">
      <Trax title="Nos Produits" />
      <List_categories  product={product} search={search} />
    </div>
    );
  }
  
  export default Categories