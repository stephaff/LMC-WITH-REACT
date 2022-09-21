import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navigation.css';

function Navigation(){
    return (
        <div className="navigation">
            <Link to='' className="navigation-link active">Nouvel arrivage</Link>
            <Link to='' className="navigation-link">Top ventes</Link>
        </div>
    )
}

export default Navigation;