import React from 'react'
import Swinia from '../../images/SWINIA.svg'
import './account-new.css'
import k from '../../images/k.png'
import Kid from './kid'

const Account =(props)=>{


    /*
        !!UWAGA TO JEST ORYGINALNA FUNKCJA WYŚWIETLAJĄCA DIVY DZIECI, NA RAZIE W CELU
        WYŚWIETLANIA PRZYKŁADOWAYCH DANYCH JEST ONA ZASTĄPIONA KOPIĄ!!
        
        const listOfKids = props.kidDetails.map(element=>{
        return(
            <Kid kid={element} key={element.id} handleClickEditProfile={props.handleClickEditProfile}/>
        )
    })*/

    const DUMMY_DATA = [
        {id:1, name:'HENIO', age:5, sizeOfShoe:42, favColor:'BLACK', height:'545', img:'a.png'},
        {id:2,name:'PABLO', age:5, sizeOfShoe:42, favColor:'BLACK', height:'545', img:'Boy Avatar.svg'},
        {id:3, name:'KACPER', age:5, sizeOfShoe:42, favColor:'BLACK', height:'545', img:'Boy Avatar.svg'},
    ]

    const listOfKids = DUMMY_DATA.map(element=>{
        return(
            <Kid kid={element} key={element.id}/>
        )
    })

    return(
        <div>

            <div className="user-description">
                <div className="user-edit">
                    Edytuj profil <img src={Swinia} alt="edytuj_profil"/>
                </div>
                <div className="user-grid">
                    <div className="user-his-image">
                        <img src={Swinia} alt="profile_picture"/>
                    </div>
                    <div className="user-textarea">
                        <h2 className="user-name">
                            Nazwa użytkownika
                        </h2>
                        <h5 className="user-likes-h5">
                            Polubione oferty: 51
                        </h5>
                        <h5 className="user-likes-h5">
                            Data założenia: 15 stycznia 2030 rok
                        </h5>     
                    </div>
                </div>
            </div>

            <div className="user-family wrapping-border">
                <h1 className="fine-text">Moja rodzina:</h1>
                <div className="user-members">
                    <div className="user-member add">
                        <div className="user-member-img">
                            <img src={k} alt="dodaj_członka" onClick={ ()=>{props.handleClickEditProfile('addNewChild')}}/>
                        </div>
                        <div className="user-member-text">
                            Dodaj nowego członka.
                        </div>
                        <div className="user-member-text">
                        
                        </div>
                    </div>
                    {listOfKids}         
                </div>    
            </div>

        </div>
        
    )
}

export default Account