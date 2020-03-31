import React from "react";
import Navigation from "../Navigation/Navigation";
import "./SideDrawer.css";
import Toggle from "../ToggleSideDrawer/Toggle"



const SideDrawer = (props) => {

    return (
        
        <div className="SideDrawer">
           <Toggle clicked={props.toggleClicked}/>
            <nav>
                <Navigation />
            </nav>
        </div>

    )
}

export default SideDrawer;