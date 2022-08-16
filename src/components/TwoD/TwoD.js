import React from "react";
import { Link } from "react-router-dom";

const TwoD = () => {
    return (
        <div>
        <h1>This page renders 2 buttons --- ink and watercolor</h1>
        <br></br>
        <Link to="/ink">Ink</Link>
        <br></br>
        <Link to="/watercolor">Water Color</Link>
        </div>
    );
    }
export default TwoD;
