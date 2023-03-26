import React from "react";
import Trax from "../component/Trax";
import "../style/Contact.css";

function Contact() {
  return (
    <div className="nos-p">
      <Trax title="Nos coordonnées" />
      <div className="contactez-nous">
        <div className="contact">
          <h3 className="title">
            N'hésitez pas à nous faire part de vos suggestions ou à répondre à
            vos questions.
          </h3>
          <div className="localisation">
            <img src="../image_contact/localisation.png" id="icone2" />
            <h5>
              14 Rue el kénitra-Tunis {"   "}
              <p>( Le coin de Djerba Transport Rue d'Italy )</p>
            </h5>
          </div>
          <div className="phone">
            <img src="../image_contact/appel.png" id="icone2" />
            <div id="num">
              <h5>+216 20 265 877</h5>
              <h5>+216 98 692 102</h5>
              <h5>+216 27 950 913</h5>
            </div>
          </div>
          <div className="mail">
            <img src="../image_contact/mail.png" id="icone2" />
            <h5>ala73.ab@gmail.com</h5>
          </div>
          <div className="fax">
            <img src="../image_contact/fax.png" id="icone2" />
            <h5>+216 71 211 156</h5>
          </div>
          <div className="facebook">
            <img src="../image_contact/facebook_.png" id="icone2" />
            <h5>Benzid Pieces Et Services "JCB & HMK"</h5>
          </div>
        </div>
        <div className="formulaire">
          <form>
            <h2 id="nn">Contactez-nous</h2>
            <label>Nom et prénom</label>
            <br />

            <input type="texte" id="input" />
            <br />
            <label>Adresse mail</label>
            <br />

            <input type="texte" id="input" />
            <br />
            <label>Message</label>
            <br />
            <input type="texte" id="input_message" />
            <br />
            <button>Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
