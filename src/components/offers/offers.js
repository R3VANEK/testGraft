import React from 'react'
import Offer_card from './offer-card'
import './offers.css'


class Offers extends React.Component{

    state={
        typeOfOffer : "",
        typesOfOffers : [
            {text : "Ubranka", picture : "ubranko.png"},
            {text : "Jedzenie", picture : "jedzenie.png"},
            {text : "Zabawki", picture : "zabawki.png"},
            {text : "Kosmetyki", picture : "kosmetyki.png"},
            {text : "Shrek", picture : "shrek.png"},
            {text : "Shrek 2" ,picture : "shrek2.png"}
        ],
        dummy_listOfOffers : [
            {id : 0, name : "Rowerek", price : 1800, category : "Zabawki", popularity : 69, img : "rowerek.png"},
            {id : 1, name : "Rowerek1", price : 1800, category : "Zabawki", popularity : 69, img : "rowerek.png"},
        ]
    }

    render(){

        var Elements = {

            h1Text : (this.state.typeOfOffer === "") ?  /*tekst nagłówkowy */
            (
            <div class="line-under-text">Oferty dla Ciebie</div>
            ) : (
            <div class="line-under-text">Wybierz typ ofert</div>
            ),

            divOffers : this.state.typesOfOffers.map((offer)=>{ /*pojedyńczy div z kategorią*/
                return(
                    <Offer_card text={offer.text} picture={offer.picture}/>
                )
            }) 

        }

        

        return(
            <div>
                <div id="contentt" class="big-container">
    
                    <div class="user-family-title-box special">
                        <div class="user-family-title-box-text">
                            <h1>Witaj TwojeImię!</h1>
                            <h2>Oto oferty, które dla Ciebie przygotowaliśmy</h2>
                        </div>
                        <div class="user-family-title-box-img">
                            <button class="btn">ZMIEŃ KRYTERIA</button><br/>
                            <button class="btn">JAK TO DZIAŁA?</button>
                        </div>
                    </div>

                    {Elements.h1Text}

                    <div class="types-of-offer">
                        {Elements.divOffers}
                    </div>

                    <div class="sort">
                        <div class="text" >Sortuj według:</div>
                        <div class="select">
                            <select name="sort-1" id="sort-1">
                                <option value="0">Nazwy</option>
                                <option value="1">Kategorii</option>
                                <option value="2">Ceny</option>
                                <option value="3">Popularności</option>
                            </select>
                        </div>
                    </div>

                    <div class="sort" >
                        <div class="text">Cena:</div>
                        <div class="select">
                            <select name="sort-2" id="sort-2">
                                <option value="1">Malejąco</option>
                                <option value="2">Rosnąco</option>
                            </select>
                        </div>
                    </div>
    
                </div>
            </div>
        )
    }
    
}

export default Offers