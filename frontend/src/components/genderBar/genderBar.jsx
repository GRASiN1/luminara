import React from "react";
import "./genderBar.css";
import { Link } from 'react-router-dom';

export default function GenderBar() {
    return (
        <div className="container">
            <div className="menu-bar">
                <Link to="#">Men</Link> |
                <Link to="#">Women</Link>
            </div>
        </div>
    )
}