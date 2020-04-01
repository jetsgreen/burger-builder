import React from "react";
import "./NavBar.css";
import Navigation from "../Navigation/Navigation";


const NavBar = () => {

    return (
        <div className="NavBar">
              
            <header>
              
                <div className="DesktopOnly">
                    <Navigation/>
                    
                </div>
        
            </header>
           
        </div>
    )
}

export default NavBar