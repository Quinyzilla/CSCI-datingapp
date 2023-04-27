import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";

function Header(){
    return (
        <div className = "header">
            <h2> Header Example </h2>
            <PersonIcon fontSize = "large" className = "header__icon"/>
        </div>
    );
}

export default Header;