import React from 'react'
import fav from '../../images/fav.png'
import share from '../../images/share.png'
import not_hot from '../../images/not-hot.png'
import './offers.css'


const Offer_card = ({item}) =>{
    return(
        <div class="outside-item" key={item.id}>
            <div id={item.id} class="single-item" >
                <img src={fav} alt="fav"/>
                <img src={share} alt="share"/>
                <div class="hot">
                <img src={not_hot} alt="hot"  />
                <div class="none">{item.hots}</div>
                </div>
                <img class="img" src={require(`../../images/`+ item.imgUrl)} alt=""/>

                <h2>{item.itemName}</h2>
                <div class="normal-text blue-text">Cena: {item.price}  zł</div>
                    <a href="#act">
                        <button class="btn1" >Przejdź do oferty</button>
                    </a>
            </div>
            <div class="hidden"></div>
        </div>
    )
}

export default Offer_card