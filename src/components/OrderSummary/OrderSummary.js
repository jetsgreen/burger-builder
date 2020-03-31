import React from "react";
import Layout from "../../components/Layout/Layout";
import "./OrderSummary.css";


const OrderSummary = (props) => {
    const indgredientSummary = Object.keys(props.ingredients).map(igKey => {

        return <li key={igKey}><span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}</li>

    });

    return (
        <Layout>
          <div className="order-content">
            <h1>Order Summary</h1>
            <p>Ingredients Chosen</p>
            <ul>
                {indgredientSummary}
            </ul>
            <p><strong>Order Total: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <button className="Button" onClick={props.purchased}>Place Order</button>
            <button className="modal-btn" onClick={props.cancel}>Cancel Order</button>
        </div>
        </Layout>
    )

}

export default OrderSummary