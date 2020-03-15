import React from 'react'
import fav from '../../images/fav.png'
import share from '../../images/share.png'
import not_hot from '../../images/not-hot.png'
import './offers.css'


const Offer_card = ({item}) =>{
    return(
        <div class="outside-item" key={item.id}>
            <div id={item.id} class="single-item" >
                <div className="item-image-area">
                    <div className="item-flying-images">
                        <div className="item-flying-image-child">
                            <img src={fav} alt="fav"/>
                        </div>
                        <div className="item-flying-image-child">
                            <img src={share} alt="share"/>
                        </div>
                        <div className="item-flying-image-child">
                            <img src={not_hot} alt="hot"/>
                        </div>
                    </div>
                    <div className="item-main-image">
                         <img src={require(`../../images/`+ item.imgUrl)} alt="zdjęcie"/>
                    </div>        
                </div>
                

                <h2>{item.itemName}</h2>
                <div class="normal-text blue-text"> {item.price}  zł</div>
                    <a href="#act">
                        <button class="btn" >Przejdź do oferty</button>
                    </a>
            </div>
        </div>
    )
}

export default Offer_card