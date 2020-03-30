import React from "react";
import "./Buttons.css";


const Buttons = (props) => {
    
    return(
        <div>
            <button onClick={props.clicked} className="Buttons">{props.children}</button>
        </div>
    )
}

export default Buttons