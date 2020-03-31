import React from "react";
import Navigation from "../Navigation/Navigation";
import "./SideDrawer.css";
import Backdrop from "../Backdrop/Backdrop";
import Layout from "../Layout/Layout"

const SideDrawer = (props) => {
 
    return (
        <Layout>
            <Backdrop show/>
        <div className="SideDrawer">
            <nav>
                <Navigation/>
            </nav>
        </div>
        </Layout>
    )
}

export default SideDrawer;