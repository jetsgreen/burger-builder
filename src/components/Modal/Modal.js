import React from "react";
import "./Modal.css";




const Modal = (props) => {
    return (
        
        <div className="Modal" style={{
            transform: props.show ? "translateX(0)" : "translateX(-100vh)",
            opacity: props.show ? "1" : "0"
        }}>

            {props.children}
            

        </div>

    )

}

export default Modal