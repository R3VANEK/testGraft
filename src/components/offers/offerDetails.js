import React, {Component} from 'react'
import './offers.css'
import needle from '../../images/needle.jpg'
import {Link} from 'react-router-dom'

class OfferDetails extends Component{

    state={

        addProductInfo:false,

        dummy_offers :[
                {id:0, itemName:'Autyzm w płynie', price:1337, givenPrice:699, hots:50, imgUrl:"needle.jpg", category:'Ubranka', siteUrl:"www.antyszczepionkowcy.pl", description:"Poznaj cudowny koniec twoich zmartwień! Jeden cudowny zastrzyk i możesz więcej się nie przejmowac swoim dzieckiem"},
                {id:1, itemName:'Rowerek', price:1500, givenPrice:'', hots:0, imgUrl:"twarz.png", category:'Ubranka', siteUrl : "www.rowerek.com", description:"Zawsze marzyłeś żeby uciec z domu? Ten szybki rowerek zatem jest wszystkim czego ci trzeba! Cyk dwójeczka i nikt cię nie dogoni piracie drogowy!"},
                {id:2, itemName:'Dezodorant', price:50, givenPrice:5, hots:666, imgUrl:"logo.png", category:'Ubranka', siteUrl:"www.umyjsię.pl", description:"Co tu dużo mówić, skoro można poczuć"},
                {id:3, itemName:'Shrek', price:999, givenPrice:1, hots:69, imgUrl:"share.png", category:'Ubranka', siteUrl:"www.seksi.pl", description:"Uwaga. Jest to produkt skierowany dla dzieci 18+. Nie zaleca się kąpania w błocie i trzymania osła w domu"},
                {id:4, itemName:'lalka', price:5, givenPrice:699, hots:420, imgUrl:"item.png", category:'Ubranka', siteUrl:"www.lalka.pl", description: "Zwykła, nudna lalka, nie miałem już weny"} ,
                {id:5, itemName:'Gra komputerowa', price:144, givenPrice:699, hots:1337, imgUrl:"item.png", category:'Jedzenie', siteUrl:"www.grytworząterrorystów.pl", description:"Czy chcesz u siebie w domu wyszkolić małego terrorystę? W takim razie to produkt dla Ciebie! Drogi rodzicu, ta gra z gatunku FPS przygotuję twoją pociechę nawet na III wojnę światową"},
        ]
    }

    addProduct = () => {

        if(!this.state.addProductInfo){
            this.setState({
                addProductInfo:true
            })

            console.log("I SHOW")

            setTimeout(() => {
                if(this.state.addProductInfo){
                    this.setState({
                        addProductInfo:false
                    })
                }
            },3000)
        }
    }


    render(){

        const {id} = this.props
        
        const addProductMessage = this.state.addProductInfo ? (

        <div className="product-added-info">
            <div className="product-added-info-icon">
                <i className="fas fa-cart-arrow-down"></i>
            </div>
            <div className="product-added-info-text">
               Dodano(1) rzeczy do koszyka! 
            </div>
        </div>

        ) : (null)

        const produkt = this.state.dummy_offers[id]
    return(

        <div className="big-container1">

            { /*******************  FLYING  **************************** */}

                    {addProductMessage}

                { /*********************************************** */}

            <Link to="/oferty">
                <div className="backOffers">
                    <p>&lt;</p><p>Powrót </p>
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
                        <button onClick={this.addProduct} className="blala">Do koszyka</button>
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

export default OfferDetails