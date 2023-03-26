import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Details from "./pages/Details";

function App() {
  const product = [
    {
      name: "AXE FUSÉE",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/AXE_FUSEE.jpg",
      reference: "448/03902",
    },
    {
      name: "ECROU GOUJON DE ROUE",
      categories: "GROUPE DE CATERPİLLAR",
      image: "../image_produit/106_40001.jpg",
      reference: "106/40001",
    },
    {
      name: "GOUJON DE ROUE 826/00533",
      categories: "GROUPE DE CATERPİLLAR",
      image: "../image_produit/826_00923.jpg",
      reference: "826/00923",
    },
    {
      name: "PARA-HUILE POND AV CORTECO 46.15-80-16.5",
      categories: "GROUPE DE CATERPİLLAR",
      image: "../image_produit/904_50040.jpg",
      reference: "904/50040",
    },
    {
      name: "CACHE POUSSIÈRE AXE FUSÉE",
      categories: "GROUPE DE CATERPİLLAR",
      image: "../image_produit/904_06700.jpg",
      reference: "904_06700",
    },
    {
      name: "ROULEMENT AXE FUSÉE TIMKEN",
      categories: "GROUPE DE CATERPİLLAR",
      image: "../image_produit/907_08300.jpg",
      reference: "907/08300",
    },
    {
      name: "ROULEMENT SEMI ARBRE AV",
      categories: "GROUPE DE CATERPİLLAR",
      image: "../image_produit/917_50200.jpg",
      reference: "917/50200",
    },
    {
      name: "CROISIONS SEMI ARBRE AV 30*82",
      categories: "GROUPE DE CATERPİLLAR",
      image: "../image_produit/914_80207.jpg",
      reference: "914/80207",
    },
    {
      name: "TAMBOUR 5 GOUJONS CRS 450/12401",
      categories: "GROUPE DE FONTE LOURDE",
      image: "../image_produit/450_10216.jpg",
      reference: "450/10216",
    },
    {
      name: "TAMBOUR 10 GOUJONS CRS 458M4231",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/F06_14050.jpg",
      reference: "F06/14050",
    },
    {
      name: "CERCLIPS PIGNON CENTRAL",
      categories: "GROUPE DE FONTE LOURDE",
      image: "../image_produit/821_00494.jpg",
      reference: "821/00494",
    },
    {
      name: "ROULEMENT PIGNON ENGRENAGE INA",
      categories: "GROUPE DE FONTE LOURDE",
      image: "../image_produit/907_50200.jpg",
      reference: "907/50200",
    },
    {
      name: "CERCLIPS PIGNON RÉDUCTEUR",
      categories: "GROUPE DE FONTE LOURDE",
      image: "../image_produit/2203_0054.jpg",
      reference: "2203/0054",
    },
    {
      name: "",
      categories: "",
      image: "../image_produit/.jpg",
      reference: "",
    },
    {
      name: "COURONNE RÉDUCTEUR ANAC + REFERENCES",
      categories: "GROUPE DE FONTE LOURDE",
      image: "../image_produit/450_10205.jpg",
      reference: "450/10205",
    },
    {
      name: "ROULEMENT MOYEU ANAC 907/20043",
      categories: "GROUPE DE FONTE LOURDE",
      image: "../image_produit/907_20043.jpg",
      reference: "907/20043",
    },
    {
      name: "PARA-HUILE MOYEU CORTECO 12017098B 127*160*15",
      categories: "GROUPE DE FONTE LOURDE",
      image: "../image_produit/904_50033.jpg",
      reference: "904/50033",
    },
    {
      name: "KIT DE REPARATION DIFFÉRENTIEL AV / AR",
      categories: "GROUPE DE FONTE LOURDE",
      image: "../image_produit/450_11000.jpg",
      reference: "450/11000",
    },
    {
      name: "ROULEMENT VIS INT",
      categories: "GROUPE DE FONTE LOURDE",
      image: "../image_produit/907_09000.jpg",
      reference: "907/09000",
    },
    {
      name: "ÉCROU VIS",
      categories: "GROUPE DE FONTE LOURDE",
      image: "../image_produit/826_01483.jpg",
      reference: "826/01483",
    },
    {
      name: "JEUX RONDELLE BRONZE BUTÉE DIFFÉRENTIEL (6 PES)",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/808_00209-10.jpg",
      reference: "808/00209-10",
    },
    {
      name: "ROULEMENT KIT DIFFÉRENTIEL 368A-362A",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/907_09200.jpg",
      reference: "907/09200",
    },
    {
      name: "ROTULE DIRECTION COMPLET",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/126_02253.jpg",
      reference: "126/02253",
    },
    {
      name: "BOULE DE ROTULE DIRECTION ANAC",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/331_14861.jpg",
      reference: "331/14861",
    },
    {
      name: "SEMI ARBRE POND AR",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/450_10209.jpg",
      reference: "450/10209",
    },
    {
      name: "ROULEMENT DIFFÉRENTIEL POND AR",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/907_50100.jpg",
      reference: "907/50100",
    },
    {
      name: "DISQUE DE FREIN",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/458_20353.jpg",
      reference: "458/20353",
    },
    {
      name: "CONTRE DISQUE DE FREIN",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/458_20285.jpg",
      reference: "458/20285",
    },
    {
      name: "KIT DISQUE DE FREIN",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/458_20353-285.jpg",
      reference: "458/20353-285",
    },
    {
      name: "JOINT DE PISTON FREIN",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/813_50026-12.jpg",
      reference: "813/50026 - 12",
    },
    {
      name: "CROISION CARDON 106*35",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/914_30901.jpg",
      reference: "914/30901",
    },
    {
      name: "CROISION CARDON 106*35",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/914_35401.jpg",
      reference: "914/35401",
    },
    {
      name: "CROISION CARDON 35*126",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/914_45301.jpg",
      reference: "914/45301",
    },
    {
      name: "ATTACHE CROISION DIM 35",
      categories: "GROUPE DE ZF HİDROMEK",
      image: "../image_produit/116_00525.jpg",
      reference: "116/00525",
    },
    {
      name: "",
      categories: "",
      image: "../image_produit/.jpg",
      reference: "",
    },
    {
      name: "",
      categories: "",
      image: "../image_produit/.jpg",
      reference: "",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/Categories/:categorie"
            element={<Details product={product} />}
          />
        </Routes>
      </div>

      <iframe id='map'
         allowfullscreen=""
         aria-hidden="false"
         tabindex="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d819584.0850963612!2d9.757332886983077!3d36.63841232779432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35ccbed3e9e7%3A0x7874fbbedf8bda1f!2sBENZID%20PI%C3%88CES%20ET%20SERVICES%20-%20BPS%20-%20TUNIS!5e0!3m2!1sfr!2stn!4v1668254733328!5m2!1sfr!2stn">
        </iframe>

      <Footer />
    </div>
  );
}

export default App;
