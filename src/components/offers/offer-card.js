import React from 'react'


const Offer_card = ({item}) =>{
    return(
        <div class="outside-item" key={item.id}>
            <div id={item.id} class="single-item" >
                <img src="fav.png" alt="fav"/>
                <img src="share.png" alt="share"/>
                <div class="hot">
                <img src="not-hot.png" alt="hot" onClick={this.handleClickLike} />
                <div class="none">{item.hots}</div>
                </div>
                <img class="img" src={item.imgUrl} alt=""/>

                <h2>{item.itemName}</h2>
                <div class="normal-text blue-text">Cena: {item.price}  zł</div>
                    <a href="#act">
                        <button class="btn" onClick={this.handleClickShowOffer}>Przejdź do oferty</button>
                    </a>
            </div>
            <div class="hidden"></div>
        </div>
    )
}

export default Offer_card