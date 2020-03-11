import React from 'react'
import exit from '../../../images/x.png';
import boyAvatar from '../../../images/Boy Avatar.svg';

const offerDetails = (props) => {
    console.log(props)
    return (
        <div className="user-offer-details" key={props.offer.id}>
            <div class="flying-exit" >
                <img src={exit} alt="cofnij" />
            </div>
            <div class="see-offer-img">
                <img src={boyAvatar} alt="zdjęcie"/>
            </div>
            <div class="description-of-item">
                <h2 class="with-bottom-line"> {props.offer.name} </h2>
                <p class="big-padding">
                    {props.offer.description}
                </p>
                <button class="btn">🎁 ZAKUP</button>
                <div class="price-and-url">
                    <div class="url" >
                        Znalezione na: <br/>
                        <a href="">{props.offer.page}</a>
                    </div>
                    <div class="price">
                        Cena: {props.offer.price} zł
                    </div>
                </div>
            </div>
        </div>
    )
}

export default offerDetails
