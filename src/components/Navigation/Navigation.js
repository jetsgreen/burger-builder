import React from "react";
import "./Navigation.css";
import Logo from "../Logo/Logo"


const Navigation =()=> {
    return(
        <div>
            
            <ul className="Navigation">
                <li>
                <a className="link" href="/">Burger Builder</a>
                </li>
                <li>
                <a className="link" href="/">Checkout</a>
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