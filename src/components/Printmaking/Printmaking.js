import React from "react";
import { Link } from "react-router-dom";

const Printmaking = () => {
    return (
        <div>
        
        <h1>This page has 4 buttons to 4 different types of Prints </h1>
        <br></br>
        <Link to="/relief">Relief</Link>
        <br></br>
        <Link to="/intaglio">Intaglio</Link>
        <br></br>
        <Link to="/leafprints">Leaf Prints</Link>
        <br></br>
        <Link to="/lithographs">Lithographs</Link>
        </div>
    );
    }
export default Printmaking;
