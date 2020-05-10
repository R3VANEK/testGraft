import React from "react"
import  './offers.css'

const CategoryCard = ({text, picture, getOffers, API_id}) =>{
    console.log(picture)
    return( 
        <div class="single-type">
            <input type="radio" id={text} name="type"/>
            <label class="single-type-label"  for={text} onClick={()=>{getOffers(null,API_id)}}>
                <h3>{text}</h3>
                <img  class="categoryImg" src={require(`../../images/categoryIcons/${picture}`)} alt="logo kategorii produktów"/>
            </label>
        </div>
    )
}

export default CategoryCard