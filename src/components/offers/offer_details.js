import React, {Component} from 'react'
import './offers.css'
import needle from '../../images/needle.jpg'
import {Link} from 'react-router-dom'

class Offer_card extends Component{

    state={
        dummy_offers :[
                {id:0, itemName:'Autyzm w płynie', price:1337, givenPrice:699, hots:50, imgUrl:"needle.jpg", category:'Ubranka', siteUrl:"www.antyszczepionkowcy.pl", description:"Poznaj cudowny koniec twoich zmartwień! Jeden cudowny zastrzyk i możesz więcej się nie przejmowac swoim dzieckiem"},
                {id:1, itemName:'Rowerek', price:1500, givenPrice:'', hots:0, imgUrl:"twarz.png", category:'Ubranka', siteUrl : "www.rowerek.com", description:"Zawsze marzyłeś żeby uciec z domu? Ten szybki rowerek zatem jest wszystkim czego ci trzeba! Cyk dwójeczka i nikt cię nie dogoni piracie drogowy!"},
                {id:2, itemName:'Dezodorant', price:50, givenPrice:5, hots:666, imgUrl:"logo.png", category:'Ubranka', siteUrl:"www.umyjsię.pl", description:"Co tu dużo mówić, skoro można poczuć"},
                {id:3, itemName:'Shrek', price:999, givenPrice:1, hots:69, imgUrl:"share.png", category:'Ubranka', siteUrl:"www.seksi.pl", description:"Uwaga. Jest to produkt skierowany dla dzieci 18+. Nie zaleca się kąpania w błocie i trzymania osła w domu"},
                {id:4, itemName:'lalka', price:5, givenPrice:699, hots:420, imgUrl:"item.png", category:'Ubranka', siteUrl:"www.lalka.pl", description: "Zwykła, nudna lalka, nie miałem już weny"} ,
                {id:5, itemName:'Gra komputerowa', price:144, givenPrice:699, hots:1337, imgUrl:"item.png", category:'Jedzenie', siteUrl:"www.grytworząterrorystów.pl", description:"Czy chcesz u siebie w domu wyszkolić małego terrorystę? W takim razie to produkt dla Ciebie! Drogi rodzicu, ta gra z gatunku FPS przygotuję twoją pociechę nawet na III wojnę światową"},
        ]
    }
    render(){

        const {id} = this.props
        
        

        const produkt = this.state.dummy_offers[id]
    return(

        <div class="big-container1">

            <Link to="/oferty">
                <div className="backOffers">
                    <p>&lt;</p><p>Powrót</p>
                </div>
            </Link>
            

            <div className="h-container">
                <h1 className="main-h1">Specjalna oferta dla ciebie</h1>
                <h2 className="our-choise">Nasz wybór</h2>
            </div>

            <div className="main-container-details">
                
            <img src={needle} alt="zdjęcie oferty" className="offer-details-img"/>


                <div className="detail-right">
                    <h2 className="h2-name-offer">{produkt.itemName}</h2>

                    <p className="detail-description">
                        {produkt.description}
                    </p>

                    <div className="stars-price">
                        <p>{produkt.price}zł</p>  {/* tu jakiś img o gwiazdkach oceny */}
                    </div>

                    <div className="buttons-container">
                        <button className="blala">Do koszyka</button>
                        <button className="blala">Kup teraz</button>
                    </div>

                    <div className="link-detail-container">
                    <Link to="/asd">{produkt.siteUrl}</Link>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )}
}

export default Offer_card