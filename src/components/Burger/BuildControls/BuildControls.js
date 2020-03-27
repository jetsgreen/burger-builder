import React from "react"

import "./BuildControls.css"
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: "Lettuce", type: "lettuce" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
    return (
        <div className="BuildControls">
            <strong><p>Current Price: {props.price.toFixed(2)}</p></strong>
            {controls.map(control => (
                <BuildControl key={control.label} 
                label={control.label} 
                added={() =>props.ingredientAdded(control.type)} 
                delete={()=> props.ingredientDeducted(control.type)}
                disabled={props.disabled[control.type]}/>
            ))}
    <button className="OrderButton">Place Order</button>

        </div>
    )
}

export default BuildControls