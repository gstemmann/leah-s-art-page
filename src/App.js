import { Route, Routes } from "react-router-dom";
import { Home, StringArt, PrintMaking, TwoD, ThreeD, Digital, About, Contact, CV } from "./components";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/string" element={<StringArt/>}/>
        <Route path="/prints" element={<PrintMaking/>}/>
        <Route path="/TwoD" element={<TwoD/>}/>
        <Route path="/ThreeD" element={<ThreeD/>}/>
        <Route path="/digital" element={<Digital/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cv" element={<CV/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
