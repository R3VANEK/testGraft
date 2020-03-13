import React, {useState} from 'react'; //ZROBIC USESTATE
import Swinia from '../../images/SWINIA.svg';
import './account.min.css';
import './offers/offer.min.css';
import plusCircle from '../../images/plusCircle.svg';
import Kid from './kids/kid';
import AddKid from './kids/addKid';
import KidDetails from './kids/kidDetails';
import Offer from './offers/offer';
import OfferDetails from './offers/offerDetails';
import UserSettings from './userSettings/userSettings';
import {
        toggleSettings, 
        toggleAddKid, 
        toggleKidDetails, 
        toggleOfferDetails,
        removeAll
        } 
        from '../../functions/userAccountHelplers';

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
        {id:0, name:'HENIO', age:5, gender:'chłopiec', shoeSize:42, favColor:'BLACK', height:'545', img:'a.png'},
        {id:1,name:'PABLO', age:5, gender:'dziewczyna', shoeSize:42, favColor:'BLACK', height:'545', img:'Boy Avatar.svg'},
        {id:2, name:'KACPER', age:5, gender:'chłopiec', shoeSize:42, favColor:'BLACK', height:'545', img:'Boy Avatar.svg'}
        
    ]

    const DUMMY_OFFERS = [
        {id:6, name:'Pan Tadeusz', page:'www.CzemuPanTadeuszToEpopejaNarodowa.pl', price:1830, description:'W "Panu Tadeuszu" znajduje się wiele elementów charakterystycznych dla eposu.Jest on wielowątkowym utworem poetyckim ukazującym bohaterskie czyny wielkich postaci, na tle przełomowych dla narodu wydarzeń. W utworze występuje wszechwiedzący i wszechobecny narrator uprzedzający o przyszłych przypadkach bohaterów. Nie każdy epos jest jednak epopeją narodową.', img:'a.png'},
        {id:4, name:'Dziady III', page:'www.KonradJakoBohaterRomantyczny.pl', price:1830, description:'Konrad to przede wszystkim bohater dynamiczny. Już na początku dramatu przechodzi przeobrażenie - "Gustavus obiit - hic hatus est Conradus [Gustaw umarł - urodził się Konrad]". Maria Janion określiła tę przemianę jako transformację z Kochanka kobiety w Kochanka ojczyzny.', img:'a.png'},
        {id:7, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},
        {id:8, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochan asd asdasd asd asd asd asd asd asd asd asd asd sad asd asd asd asd sad asd asd asd as das das das asd asd asd asd asd asd as das das das das dasd asd as das dasd asd asd asd asd as das das as das ds asd asd asd asd asd asd asd asd asd asd asd asdas as da asd asdas das dasd asd asd asd asd asd as dasd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd as das das dasd asd asd as das das das as das das das das dassd as dasd asd asd as dasowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'}, 
        {id:9, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},
        {id:15, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},
        {id:10, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},
        {id:11, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},
        {id:12, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},       
        {id:13, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},
        {id:14, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'}
    ]


    /*******  DYNAMICALLY CHANGING CURRENTLY EDITING KID  ******/
    const [kid, editKid] = useState({
        id:11,
        name:'ssss',
        age:5,
        shoeSize:5,
        favColor:'s',
        height:5,
        img:''
    })

    const changeActualKid = (id) => {
        let index = DUMMY_DATA.findIndex( (item) => item.id === id)
        editKid(DUMMY_DATA[index]);
    }
    /*************************************************************/

     /************  DYNAMICALLY CHANGING CURRENT OFFER ***********/
     const [offer, editOffer] = useState({
        id:14, 
        name:'Treny'
        , page:'www.PoChujKochanowskiNapisałTreny.pl'
        , price:1830, 
        description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.',
         img:'a.png'

    })

    const changeActualOffer = (id) => {
        let index = DUMMY_OFFERS.findIndex( (item) => item.id === id)
        editOffer(DUMMY_OFFERS[index]);
    }
    /*************************************************************/


    /**************** RENDER LIST OF KIDS AND OFFERS **************/
    const listOfKids = DUMMY_DATA.map(element=>{
        return(
            <Kid kid={element} key={element.id} 
            changeActualKid={changeActualKid} toggleKidDetails={toggleKidDetails}/>
        )
    })

    const listOfOffers = DUMMY_OFFERS.map(element=>{
        return(
            <Offer offer={element} key={element.id}
            changeActualOffer={changeActualOffer} toggleOfferDetails={toggleOfferDetails}/>
        )
    })
    /*************************************************************/
    

    return(
        <>

            {/* FLYING THINGS */}

            <div className="flying-block user-settings-wrapper anim-fade-in none">
                <UserSettings />
            </div>
            <div className="flying-block add-new-kid-wrapper anim-fade-in none">
                <AddKid />
            </div>
            <div className="flying-block edit-kid-wrapper anim-fade-in none">
                <KidDetails kid={kid} editKid={editKid} />    
            </div>
            <div className="flying-block user-offer-details-wrapper anim-fade-in">
                <OfferDetails offer={offer} editOffer={editOffer} />    
            </div>

            <div className="overlay" onClick={removeAll}></div>

            {/*****************/}

        <main>
            <div className="user-description">
                <div className="user-edit" onClick={toggleSettings}>
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
                            Polubione oferty: <span>51</span>
                        </h5>
                        <h5 className="user-likes-h5">
                            Data założenia: <span>15 stycznia 2030 rok</span>
                        </h5>     
                    </div>
                </div>
            </div>

            <div className="user-family wrapping-border">
                <h1 className="fine-text">Moja rodzina:</h1>
                <div className="user-members">
                    <div className="user-member add">
                        <div className="user-member-img">
                            <img src={plusCircle} alt="dodaj_członka" 
                            onClick={toggleAddKid}/>
                        </div>
                        <div className="user-member-text">
                            Dodaj nowego członka.
                        </div>
                        
                    </div>
                    {listOfKids}         
                </div>   
            </div>
            <div className="offer-list wrapping-border">
                <h1 className="fine-text">Ulubione oferty:</h1>
                <div className="offers-block">
                    {listOfOffers}
                </div>
                  
            </div>

        </main>
    </>
    )
}

export default Account