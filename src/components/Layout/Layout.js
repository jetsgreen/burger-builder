import React from "react"
import "./Layout.css"



const Layout = (props) => {
    return <div  className="content">
        {props.children}
        </div>;

};

export default Layout