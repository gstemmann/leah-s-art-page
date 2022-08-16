import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./components/Home/Home";
import StringArt from "./components/StringArt/StringArt";
import Circles from "./components/Circles/Circles";
import Tessellations from "./components/Tessellations/Tessellations";
import DreamCatchers from "./components/DreamCatchers/DreamCatchers";
import MixedMedia from "./components/MixedMedia/MixedMedia";
import Printmaking from "./components/Printmaking/Printmaking";
import Relief from "./components/Relief/Relief";
import Intaglio from "./components/Intaglio/Intaglio";
import LeafPrints from "./components/LeafPrints/LeafPrints";
import Lithographs from "./components/Lithographs/Lithographs";
import TwoD from "./components/TwoD/TwoD";
import Ink from "./components/Ink/Ink";
import WaterColor from "./components/WaterColor/WaterColor";
import ThreeD from "./components/ThreeD/ThreeD";
import Digital from "./components/Digital/Digital";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import CV from "./components/CV/CV";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// import { Nav } from "react-bootstrap";




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/string" element={<StringArt/>}/>
          <Route path="/circles" element={<Circles/>}/>
          <Route path="/tessellations" element={<Tessellations/>}/>
          <Route path="/dreamcatchers" element={<DreamCatchers/>}/>.
          <Route path="/mixed" element={<MixedMedia/>}/>
        <Route path="/prints" element={<Printmaking/>}/>
          <Route path="/relief" element={<Relief/>}/>
          <Route path="/intaglio" element={<Intaglio/>}/>
          <Route path="/leafprints" element={<LeafPrints/>}/>
          <Route path="/lithographs" element={<Lithographs/>}/>
        <Route path="/twod" element={<TwoD/>}/>
          <Route path="/ink" element={<Ink/>}/>
          <Route path="/watercolor" element={<WaterColor/>}/>
        <Route path="/threed" element={<ThreeD/>}/>
        <Route path="/digital" element={<Digital/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cv" element={<CV/>}/>
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
