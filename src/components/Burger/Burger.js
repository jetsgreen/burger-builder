import React from "react"
import "./Burger.css"
import BurgerIndgridient from "./BurgerIngridient/BurgerIngridient"

const Burger = (props) => {
    let burgerIngredients = Object.keys(props.ingredients).map(igKey =>{
        return[...Array(props.ingredients[igKey])].map((_, i)=>{

           return <BurgerIndgridient key={igKey + i} type={igKey}/>
        
        }); 
           
    }).reduce((arr, el)=>{
        return arr.concat(el)
    }, []);
    if(burgerIngredients.length === 0){
        burgerIngredients = <p className="ingredient-warning">Please Add Some Ingredients</p>
    }

    console.log(burgerIngredients)
    return (
        <div className="Burger">
           <BurgerIndgridient type="bread-top"/>
           {burgerIngredients}
           <BurgerIndgridient type="bread-bottom"/>
        </div>
    );
}

export default Burger;