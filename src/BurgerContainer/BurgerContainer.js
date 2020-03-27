import React, { Component } from 'react'
import Layout from "../components/Layout/Layout"
import NavBar from "../components/NavBar/NavBar"
import Burger from "../components/Burger/Burger"
import BuildControls from "../components/Burger/BuildControls/BuildControls"



export class BurgerContainer extends Component {

state = {
    ingredients: {
        lettuce: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    }
}

    render() {
        return (

            <Layout>
                <NavBar />
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls/>
                    
                </div>
            </Layout>
        )
    }
}

export default BurgerContainer
