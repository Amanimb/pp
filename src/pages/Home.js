import React from 'react'
// import { Carousel } from 'react-responsive-carousel';
// import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "../style/Home.css";
import Carousel from '../component/Carousel';



function Home() {
  return (
    <div className="home">
      <img src="/bps.jpg" className="pppp" />
      <div id="rrr">
        <img
          src="../image_about/magasin2.jpg"
          className="rainbow"
          id="magasin"
        />
        <div id="mm">
          <p>
            Notre société BPS, A été créée en 2011 du côté de Tunis, capitale de
            la Tunisie, en tant que fournisseur de pièces de rechange destinées
            aux engins de chantier de tous marque principalement JCB et
            HIDROMEK.
            <br /> Notre société est héritière d’une solide expérience issue de
            notre entreprise mère « SEBA » connue par le nom BENZID LOCATION
            MATÉRIEL, une des pionnières dans la location et l’entretien des
            engins de travaux publics en Tunisie, principalement de marque JCB
            depuis les années 80.
            <br /> Notre savoir-faire nous a permis de se convertir à l’activité
            de vente en détail de pièces de rechange en créant la société BPS,
            dont l’activité principale est la fourniture de pièces de rechange
            alternatives pour les engins de chantier JCB 3CX et 4CX CHARGEUR A
            RÉTROCAVEUSE.
            <br /> Profitant de la large et la longue expérience technique et
            commerciale dans la gestion et l’entretien du parc des équipements
            JCB, « BPS » a pu s’imposer dans le marché tunisien et disposer
            d’une notoriété et d’un haut niveau de technicité dans ce domaine.
            <br />
            <Link
              to="/About"
              className="details"
              style={{ width: "100%" }}
            >
              <b>Plus de détails</b>
            </Link>
          </p>
        </div>
        
      </div>
     
      <div className='ll'>
        <h1 id='i'>Carte visite</h1>
        <img src='carte visite.jpg' id='lll'/>
      </div>
      {/* <div className='car'>
      <Carousel/>     
      </div> */}
     
    </div>
  );
}

export default Home