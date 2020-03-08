import React from "react"
import  './offers.css'

const Offer_card = ({text, obrazek}) =>{
    return(
        <div class="single-type" >
            <input type="radio" id="cat1" name="type"/>
            <label class="single-type-label" for="cat1">
                <h3>{text}</h3>
            </label>
        </div>
    )
}

export default Offer_card