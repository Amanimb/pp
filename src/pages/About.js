import React from 'react'
import Trax from '../component/Trax';
import '../style/About.css'
import "../style/Categorie_card.css";
import "../style/list.css";


function About() {
  return (
    <div className="nos-p">
      <Trax title="À  propos" />

      <div className="about">
        <h1>Benzid Pieces et Services</h1>
        <div className="contenu">
          <div className="texte">
            <p>
              Notre société BPS, A été créée en 2011 du côté de Tunis, capitale
              de la Tunisie, en tant que fournisseur de pièces de rechange
              destinées aux engins de chantier de tous marque principalement JCB
              et HIDROMEK.
              <br /> Notre société est héritière d’une solide expérience issue
              de notre entreprise mère « SEBA » connue par le nom BENZID
              LOCATION MATÉRIEL, une des pionnières dans la location et
              l’entretien des engins de travaux publics en Tunisie,
              principalement de marque JCB depuis les années 80.
              <br /> Notre savoir-faire nous a permis de se convertir à
              l’activité de vente en détail de pièces de rechange en créant la
              société BPS, dont l’activité principale est la fourniture de
              pièces de rechange alternatives pour les engins de chantier JCB
              3CX et 4CX CHARGEUR A RÉTROCAVEUSE.
              <br /> Profitant de la large et la longue expérience technique et
              commerciale dans la gestion et l’entretien du parc des équipements
              JCB, « BPS » a pu s’imposer dans le marché tunisien et disposer
              d’une notoriété et d’un haut niveau de technicité dans ce domaine.
              <br /> En outre, nous bénéficions d’un bon capital-confiance
              auprès de notre clientèle notamment grâce à la compétence et la
              disponibilité de notre personnel, toujours prêts à conseiller ses
              clients et à leur fournir la solution la plus adéquate à leurs
              besoins en terme de qualité et de prix.
              <br /> Nous disposons aujourd’hui d’un réseau de points de vente
              constitué essentiellement de deux magasins situés dans deux
              gouvernorats du grand Tunis offrant un service de proximité ainsi
              qu’une assistance téléphonique et en ligne en faveur de nos
              fidèles clients notamment grâce à notre page FB :
              <br />
              <div id="fb">
                <img src="../image_about/facebook.png" id="icone" />
                <b>Bps Benzid</b>
              </div>
            </p>
          </div>
          <div className="image">
            <img
              src="../image_about/magasin2.jpg"
              className="rainbow"
              id="magasin"
            />

            {/* <img src="../image_about/magasin.jpg" /> */}
            <img
              src="../image_about/magasin1.jpg"
              className="rainbow"
              id="magasin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About