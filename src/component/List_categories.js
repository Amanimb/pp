import React from 'react'
import Categorie_card from './Categorie_card'
import { useParams } from "react-router-dom";

function List_categories({categories}) {
  
   const { id } = useParams();
  return (
    <div className='list'>
        {categories.map((cat, i)=><Categorie_card categorie={cat} key={i} />)}
        
    </div>
  )
}

export default List_categories