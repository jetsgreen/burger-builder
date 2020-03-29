import React from "react";
import Layout from "../../components/Layout/Layout";

const OrderSummary = (props) => {
    const indgredientSummary = Object.keys(props.ingredients).map(igKey =>{
   
        return <li key={igKey}><span style={{textTransform: "capitalize"}}>{igKey}</span>: 
        {props.ingredients[igKey]}</li>

    });

    return (
        <Layout>
            <h3>Order Summary</h3>
            <p>ingredients Chosen</p>
            <ul>
              {indgredientSummary}
            </ul>
            <p>Continue to Checkout</p>
        </Layout>
    )

}

export default OrderSummary