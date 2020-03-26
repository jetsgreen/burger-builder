import React, { Component } from 'react'
import Layout from "../components/Layout/Layout"
import NavBar from "../components/NavBar/NavBar"
import Burger from "../components/Burger/Burger"



export class BurgerContainer extends Component {

state = {
    ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
    }
}

    render() {
        return (

            <Layout>
                <NavBar />
                <div>

                    <Burger ingredients={this.state.ingredients}/>
                    <p>Build Controls</p>
                </div>
            </Layout>
        )
    }
}

export default BurgerContainer
