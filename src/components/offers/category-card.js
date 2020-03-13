import React from "react"
import  './offers.css'

const Category_card = ({text, obrazek, showOffers}) =>{
    return(
        <div class="single-type"   >
            <input type="radio" id={text} name="type"/>
            <label class="single-type-label"  for={text} onClick={showOffers}>
                <h3>{text}</h3>
            </label>
        </div>
    )
}

export default Category_card