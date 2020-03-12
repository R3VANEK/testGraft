import React from 'react'
import exit from '../../../images/x.png';
import boyAvatar from '../../../images/Boy Avatar.svg';
import {removeAll} from '../../../functions/userAccountHelplers';

const offerDetails = (props) => {
    return (
        <div className="user-offer-details" key={props.offer.id}>
            <div className="flying-exit" onClick={removeAll}>
                <img src={exit} alt="cofnij" />
            </div>
            <div className="user-offer-details-img">
                <img src={boyAvatar} alt="zdjęcie"/>
            </div>
            <div className="user-description-of-item">
                <h2 className="with-bottom-line"> {props.offer.name} </h2>
                <p className="big-padding">
                    {props.offer.description}
                </p>
                <button className="btn purple-btn">🎁ZAKUP</button>
                <div className="price-and-url">
                    <div className="url" >
                        Znalezione na: <br/>
                        <a className="scroll-overflow" href="">{props.offer.page}</a>
                    </div>
                    <div className="price">
                        Cena: <span>{props.offer.price}</span> zł
                    </div>
                </div>
            </div>
        </div>
    )
}

export default offerDetails
