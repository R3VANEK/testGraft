import React from "react"
import  './offers.css'

const CategoryCard = ({text, obrazek, getOffers, API_id}) =>{
    return(
        <div class="single-type">
            <input type="radio" id={text} name="type"/>
            <label class="single-type-label"  for={text} onClick={()=>{getOffers(null,API_id)}}>
                <h3>{text}</h3>
            </label>
        </div>
    )
}

export default CategoryCard