import React from "react";
import { Link } from "react-router-dom";
import Circles from "../Circles/Circles";
import Tessellations from "../Tessellations/Tessellations";
import DreamCatchers from "../DreamCatchers/DreamCatchers";
import MixedMedia from "../MixedMedia/MixedMedia";


const StringArt = () => {
    return (
        <div>
        <h1>This page has 4 buttons to 4 different types of StringArt</h1>
        <br></br>
        <Link to="/circles">Circles</Link>
        <br></br>
        <Link to="/tessellations">Tessellations</Link>
        <br></br>
        <Link to="/dreamcatchers">DreamCatchers</Link>
        <br></br>
        <Link to="/mixed">Mixed Media</Link>

        </div>
    );
    }
export default StringArt;
