import React from 'react';
import { Link } from "react-router-dom";

export function Footer(props) {
    return(
        <footer className="footer">
            <p>&copy; 2023 Fantasy Football 340 Version A1. All rights reserved. | <a href="mailto:contact@fantasyfootball.com">contact@fantasyfootball.com</a></p>
        </footer>
    )
}

export function ErrorPage(props) {
    return(
        <div>
            <h1>The page you are looking for does not exist</h1>
            <Link to="/home">Back to Home</Link>
        </div>
    )
}