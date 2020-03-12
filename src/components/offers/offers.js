import React from 'react'
import Category_card from './category-card'
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
            {id:0, itemName:'Rowerek 1', price:123, givenPrice:699, hots:50, imgUrl:"watch.jpeg", category:'Ubranka'},
                {id:1, itemName:'Rowerek 2', price:321, givenPrice:'', hots:0, imgUrl:"twarz.png", category:'Ubranka'},
                {id:2, itemName:'Rowerek 3', price:99, givenPrice:5, hots:666, imgUrl:"logo.png", category:'Ubranka'},
                {id:3, itemName:'Rowerek 4', price:999, givenPrice:1, hots:69, imgUrl:"share.png", category:'Ubranka'},
                {id:4, itemName:'Rowerek 5', price:5, givenPrice:699, hots:420, imgUrl:"item.png", category:'Ubranka'} ,
                {id:5, itemName:'Rowerek 6', price:444, givenPrice:699, hots:1337, imgUrl:"item.png", category:'Jedzenie'},
                {id:6, itemName:'Rowerek 7', price:9876, givenPrice:6469, hots:2137, imgUrl:"item.png", category:'Jedzenie'},
                {id:7, itemName:'Rowerek 1', price:123, givenPrice:699, hots:50, imgUrl:"watch.jpeg", category:'Jedzenie'},
                {id:8, itemName:'Rowerek 2', price:321, givenPrice:'', hots:0, imgUrl:"twarz.png", category:'Zabawki'},
                {id:9, itemName:'Rowerek 3', price:199, givenPrice:5, hots:666, imgUrl:"logo.png", category:'Zabawki'},
                {id:10, itemName:'Rowerek 4', price:999, givenPrice:1, hots:69, imgUrl:"share.png", category:'Zabawki'},
                {id:11, itemName:'Rowerek 5', price:5, givenPrice:699, hots:420, imgUrl:"item.png", category:'Zabawki'} ,
                {id:12, itemName:'Rowerek 6', price:444, givenPrice:699, hots:1337, imgUrl:"item.png", category:'Zabawki'},
                {id:13, itemName:'Rowerek 7', price:9876, givenPrice:6469, hots:2137, imgUrl:"item.png", category:'Zabawki'},
                {id:14, itemName:'Rowerek 1', price:123, givenPrice:699, hots:50, imgUrl:"watch.jpeg", category:'Zabawki'},
                {id:15, itemName:'Rowerek 2', price:321, givenPrice:'', hots:0, imgUrl:"twarz.png", category:'Zabawki'},
                {id:16, itemName:'Rowerek 3', price:989, givenPrice:5, hots:666, imgUrl:"logo.png", category:'Zabawki'},
                {id:17, itemName:'Rowerek 4', price:909, givenPrice:1, hots:69, imgUrl:"share.png", category:'Kosmetyki'},
                {id:18, itemName:'Rowerek 5', price:1, givenPrice:699, hots:420, imgUrl:"item.png", category:'Kosmetyki'} ,
                {id:19, itemName:'Rowerek 6', price:434, givenPrice:699, hots:1337, imgUrl:"item.png", category:'Kosmetyki'},
                {id:20, itemName:'Rowerek 7', price:9876, givenPrice:6469, hots:2137, imgUrl:"item.png", category:'Kosmetyki'},
                {id:21, itemName:'Rowerek 1', price:124, givenPrice:699, hots:50, imgUrl:"watch.jpeg", category:'Kosmetyki'},
                {id:22, itemName:'Rowerek 2', price:321, givenPrice:'', hots:0, imgUrl:"twarz.png", category:'Kosmetyki'},
                {id:23, itemName:'Rowerek 3', price:999, givenPrice:5, hots:666, imgUrl:"logo.png", category:'Shrek'},
                {id:24, itemName:'Rowerek 4', price:990, givenPrice:1, hots:69, imgUrl:"share.png", category:'Shrek'},
                {id:25, itemName:'Rowerek 5', price:5, givenPrice:699, hots:420, imgUrl:"item.png", category:'Shrek'} ,
                {id:26, itemName:'Rowerek 6', price:444, givenPrice:699, hots:1337, imgUrl:"item.png", category:'Shrek'},
                {id:27, itemName:'Rowerek 7', price:9876, givenPrice:6469, hots:2137, imgUrl:"item.png", category:'Shrek 2'}
        ],

        categorySelect : null,  /* zmienne potrzebne przy wyborze ofert */
        sort : null,
        sortedArray : null
    }

    offerRender = (category, param = null) =>{
        this.setState({
            categorySelect : category,
            sort : param
        })

        if(this.state.sort === "min-max"){
            this.state.sortedArray = this.state.dummy_listOfOffers.sort((a , b)=>{
                if(a.price < b.price){
                    return -1
                }
                else if(a.price > b.price){
                    return 1
                }
                else{
                    return 0
                }

            })
        }
        else if(this.state.sort === "max-min"){
            this.state.sortedArray = this.state.dummy_listOfOffers.sort((a , b)=>{
                if(a.price < b.price){
                    return 1
                }
                else if(a.price > b.price){
                    return -1
                }
                else{
                    return 0
                }

            })
        }
        
    }

    testing = (e) =>{
        console.log(e.target)
    }

    

    render(){

        const h1Text = (this.state.typeOfOffer === "") ?  /*tekst nagłówkowy */
        (
        <div class="line-under-text">Oferty dla Ciebie</div>
        ) : (
        <div class="line-under-text">Wybierz typ ofert</div>
        )

        const divCategories = this.state.typesOfOffers.map((offer)=>{ /*lista divów z kategorią*/
            return(
                <Category_card text={offer.text} picture={offer.picture}/>
            )
        })

        const divOffers = (this.state.categorySelect != null) ?   /* lista posortowanych divów z ofertami i */
        (
            (this.state.sort != null) ?
            (
                this.state.sortedArray.map((item)=>{
                    if(item.category === this.state.categorySelect){
                        return(
                            <Offer_card item={item}/>
                        )
                    }
                })
            ) :
            (
                this.state.dummy_listOfOffers.map((item)=>{
                    if(item.category === this.state.categorySelect){
                        return(
                            <Offer_card item={item}/>
                        )
                    }
                    
                })
            )
        ) :
        (
            null
        )
        
        
        

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

                    {h1Text}

                    <div class="types-of-offer">
                        {divCategories}
                    </div>

                    <div class="sort">
                        <div class="text" >Sortuj według:</div>
                        <div class="select">
                            <select name="sort-1" id="sort-1" onChange={this.testing}>
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
                            <select name="sort-2" id="sort-2" onChange={this.testing}>
                                <option value="1">Malejąco</option>
                                <option value="2">Rosnąco</option>
                            </select>
                        </div>
                    </div>

                    {divOffers}
    
                </div>
            </div>
        )
    }
    
}

export default Offers