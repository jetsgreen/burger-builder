import React from "react";
import "./Navigation.css";
import Logo from "../Logo/Logo"


const Navigation =()=> {
    return(
        <div>
            
            <ul className="Navigation">
                <li>
                <p className="link">Burger Builder</p>
                </li>
                <li>
                <p className="link" >Checkout</p>
                </li>
                <li>
                <div className="logo">
                        <Logo/>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default Navigation