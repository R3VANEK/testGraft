import React from 'react'

const Offer = (props) => {
    return (
        <div className="offer" key={props.offer.id}>
            {props.offer.name}
        </div>
    )
}

export default Offer
