import React from 'react'
import {removeAll} from '../../../functions/userAccountHelplers';
import exit from '../../../images/x.png';
import boyAvatar from '../../../images/Boy Avatar.svg'
import './kids.min.css';

const DeleteKid = (props) => {

    const deleteKid = () => {
        const id = props.kid.id;

        //USUWANIE DZIECKA
    }

    return (
        <form className="delete-kid-block" onSubmit={deleteKid}>
            <div className="flying-exit" onClick={removeAll}>
                <img src={exit} alt="usuń"/>
            </div>
            <img className="img" src={boyAvatar} alt="dziecko" />
            <h2>{props.kid.name}</h2>
            <h3>Usunąć członka rodziny?</h3>
            
            <button className="btn purple-btn">Usuń</button>
            
        </form>
    )
}

export default DeleteKid
