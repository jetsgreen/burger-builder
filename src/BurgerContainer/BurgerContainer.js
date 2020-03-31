import React, { Component } from 'react';
import Layout from "../components/Layout/Layout";
import NavBar from "../components/NavBar/NavBar";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Modal from "../components/Modal/Modal";
import OrderSummary from "../components/OrderSummary/OrderSummary";



const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.5,
    meat: 1.50,
    bacon: 0.8
}

export class BurgerContainer extends Component {

state = {
    ingredients: {
        lettuce: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
    purchaseble: false,
    purchansing: false,
}

purchaseHandler = () => {
    this.setState({purchansing: true});
}

cancelOrderHandler = () => {
    this.setState({purchansing: false});
   
}

placeOrderHandler = () => {
    alert("Thank you for your purchase");
}

updatePurchasableHandler = (ingredients) => {
  
    const sum = Object.keys(ingredients).map(igKey =>{
        return ingredients[igKey];
    }).reduce((sum, el) => {
        return sum + el;
    }, 0);
    this.setState({purchaseble: sum > 0})
}

addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type] 
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchasableHandler(updatedIngredients);
}

deleteIngredientHandler = (type) => {

    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
        return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type] 
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchasableHandler(updatedIngredients);

}


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (

            <Layout>
                <NavBar />
              
                <Modal show={this.state.purchansing} >
                <OrderSummary ingredients={this.state.ingredients} 
                purchased={this.placeOrderHandler}
                cancel={this.cancelOrderHandler}
                price={this.state.totalPrice}/>
                
                </Modal>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientDeducted={this.deleteIngredientHandler}
                    disabled ={disabledInfo}
                    purchaseble={this.state.purchaseble}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                    
                    />
                    
                </div>
            </Layout>
        )
    }
}

export default BurgerContainer
