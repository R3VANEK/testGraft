import React from 'react'
import './offers.css'
import needle from '../../images/needle.jpg'
import {Link} from 'react-router-dom'

const Offer_card = ({id}) =>{
    return(

        <div class="big-container1">

            <div className="backOffers">
                <p>&lt;</p><p>Powrót</p>
            </div>

            <div className="h-container">
                <h1 className="main-h1">Autyzm w płynie dla najmłodszych</h1>
                <h2 className="our-choise">Nasz wybór</h2>
            </div>

            <div className="main-container-details">
                <img src={needle} alt="zdjęcie oferty" className="offer-details-img"/>

                <div className="detail-right">
                    <h2 className="h2-name-offer">Małe dzieci</h2>

                    <p className="detail-description">
                        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. 
                        De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel 
                        maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless
                        mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus 
                        comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem 
                        incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. 
                        Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead 
                        zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.
                    </p>

                    <div className="stars-price">
                        <p>129 zł</p>  {/* tu jakiś img o gwiazdkach oceny */}
                    </div>

                    <div className="buttons-container">
                        <button className="blala">Do koszyka</button>
                        <button className="blala">Kup teraz</button>
                    </div>

                    <div className="link-detail-container">
                    <Link to="/asd">www.sklep.pl</Link>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Offer_card