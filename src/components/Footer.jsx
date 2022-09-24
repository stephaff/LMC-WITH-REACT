import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css';

function Footer(){
    return (
        <div className="footer">
            <p>&copy; LMC-Shop design by <Link to='' className="designer">Affali stephane</Link></p>
        </div>
    );
}

export default Footer;