import React, {Component} from 'react'
import './afterRegister.css'
import a from '../../images/a.png'
import logo from '../../images/logo.svg'
import rocket from '../../images/rocket.png'
import blocks from '../../images/blocks.svg';
import rack from '../../images/rack.svg';
import list from '../../images/list.svg';

import pants from '../../images/pants.svg';
import pantsWhite from '../../images/pantsWhite.svg';
import tShirt from '../../images/tShirt.svg';
import tShirtWhite from '../../images/tShirtWhite.svg';
import cap from '../../images/cap.svg';
import capWhite from '../../images/capWhite.svg';
import shoes from '../../images/shoes.svg';
import shoesWhite from '../../images/shoesWhite.svg';
import {Redirect, Link} from 'react-router-dom'

class AfterRegister extends Component {

    state = {
        imagesOfCards: [
            {
                "active": tShirtWhite,
                "disabled": tShirt
            },
            {
                "active": pantsWhite,
                "disabled": pants
            },
            {
                "active": shoesWhite,
                "disabled": shoes
            },
            {
                "active": capWhite,
                "disabled": cap
            }
        ],
        redirect : null,
        idBlock : 0,   /* potrzebne do cofania kart */
        interestList : []
    }


    componentDidMount(){
        if(sessionStorage.user_name == undefined || sessionStorage.user_name == null){   
           this.setState({redirect : true})
        }
        else{   
            this.setState({redirect : false})
        }
    }
    goToNextBlock = (idBlock, idImg=null) => {

        console.log(idBlock)
        const currentBlock = document.querySelector(`.changing-content#nr${idBlock}`)
        this.setState({
            idBlock : parseInt(idBlock)
        })
        
        const nextBlock = document.querySelector(`.changing-content#nr${Number(idBlock)+1}`)

        currentBlock.classList.add("invisible");
        nextBlock.classList.remove("invisible")

        if(idImg !== null){
            const currentImage = document.querySelector(`.changing-main-img#nr${idImg}`)
        
            const nextImage = document.querySelector(`.changing-main-img#nr${Number(idImg)+1}`)

            currentImage.classList.add("invisible");
            nextImage.classList.remove("invisible")
        }
    }

    goToPrevBlock = () =>{

        /* je??eli jest r??wne 0 to oznacza, ??e u??ytkownik jest na samym pocz??tku i chce wyj???? z tej strony */
        if(this.state.idBlock != 0){

            let {idBlock} = this.state 
            const currentBlock = document.getElementsByClassName(`changing-content`)[idBlock]
            const prevBlock = document.getElementsByClassName(`changing-content`)[idBlock-1]

            currentBlock.classList.add("invisible");
            prevBlock.classList.remove("invisible")

            this.setState({
                idBlock : idBlock-1
            })
        }
        else{
            this.setState({
                redirect: true
            })
        }
    }

    interestCheck = (name) =>{

        let {interestList} = this.state
        let updatedList = []

        let check = interestList.findIndex((el)=>{
            return el == name
        })
        
        /* je??eli check ma -1 to znaczy ??e trzeba dodac element, 
        w innym wypadku user odznaczy?? opcj??, wi??c usuwamy */
        if(check == -1){
            interestList.push(name) 
        }
        else{
            interestList.splice(check, 1)
        }
        this.setState({interestList : interestList})

    }


    submitAfterData = () =>{

        let API_string = ""
        let {interestList} = this.state

        interestList.forEach((el, index)=>{

            /* Gdyby w przysz??o??ci pojawi??a si?? kategoria ze spacj??, API wymaga by spacj?? zast??pi?? %20 */
            let toPut = el.replace(" ", "%20")
            
            if(index != 0){
                API_string += `,${toPut}`
            }
            else{
                API_string += `${toPut}`
            }
            
            
        })
        console.log(API_string)

        let {user_id, user_email} = sessionStorage
        fetch(`http://vps817819.ovh.net:50/preferences/?id=${user_id}&email=${user_email}&interests=${API_string}`, {
            method : "POST"
        })
        .then(response=>{
            return response.json()
        })
        .then(data =>{
            console.log(data)
        })
    }


    changeInput = (id) => {

        console.log(this.state.imagesOfCards, id)

        const previousInput = document.querySelector(".changing-input.active");
        const currentInput = document.querySelector(`.changing-input#nr${id}`);

        if(previousInput === currentInput){
            return;
        }

        const previousCard = document.querySelector(`.after-register-card.active`);
        const currentCard = document.querySelector(`.after-register-card#nr${id}`);

        if(previousInput){
            previousInput.classList.add("invisible");
            previousInput.classList.remove("active");

            previousCard.classList.remove("active");
            console.log(previousCard.id.charAt(2))
            previousCard.childNodes[0].src = this.state.imagesOfCards[Number(previousCard.id.charAt(2))-1].disabled;
        }

        console.log(currentCard, currentCard.id)

        currentCard.classList.add("active");

        console.log(this.state.imagesOfCards[id-1])
        currentCard.childNodes[0].src = this.state.imagesOfCards[id-1].active;// iD

        currentInput.classList.remove("invisible");
        currentInput.classList.add("active");
    }

    render(){
        
        return(
        
            <main>

                {/* ta strona powinna by?? widoczna tylko dla ??wie??o zarejestrowanych u??ytkownik??w */}
                {(this.state.redirect) ? <Redirect to="/"/> : null}


                <div className="after-register-block">
                    <section className="after-register-block-first">

                        <div className="after-register-fixed-logo">
                            <img src={logo} alt="logo" />
                        </div>
                            
                        <div className="after-register-block-first-inner">

                    
                            <h1>Zaczynamy!</h1>

                            <div className="after-register-block-first-inner-img">

                                <img src={rocket} alt="rakieta" class="changing-main-img" id="nr1"/>
                                <img src={blocks} alt="klocki"  class="changing-main-img invisible" id="nr2"/>
                                <img src={rack} alt="wieszak" class="changing-main-img invisible" id="nr3"/>
                                <img src={list} alt="lista" class="changing-main-img invisible" id="nr4"/>


                            </div>

                            <p>
                                Dzi??ki skonfigurowaniu konta nasz algorytm b??dzie m??g?? 
                                lepiej dopasowa?? si?? w Twoje gusta i jeszcze bardziej 
                                uprzyjemni?? Ci zakupy.
                            </p>
                        </div>
                    </section>
                    <section className="after-register-block-second">
                        <button className="back-btn" onClick={this.goToPrevBlock}>
                            <i class="fas fa-chevron-left icon"></i>  POWR??T
                        </button>

                        <div className="after-register-wrapper changing-content" id="nr1">

                            <div className="after-register-block-second-inner shorter" >
                                <h1>Odpowiedz na kilka pyta?? aby skonfigurowa?? Swoje konto.</h1>

                                <div className="after-register-line"></div>

                                <p>
                                    Odpowiedzi na pytania nie s?? bezpo??rednio powi??zane z tob??
                                    dzi??ki czemu nie da si?? ich dopasowa?? do konkretnego u??ytkownika.
                                </p>
                            </div>

                            <button className="after-register-btn" id="1" 
                            onClick={(e) => {this.goToNextBlock(e.target.id, e.target.id)}}>
                                DO DZIE??A!
                            </button>

                            <Link to='/'>
                                <span className="after-register-span">Skonfiguruj p????niej</span>
                            </Link>

                        </div>

                        <div className="after-register-wrapper changing-content invisible" id="nr2">

                            <div className="after-register-block-second-inner longer" >
                                <h1>Podaj wymiary</h1>

                                <div className="after-register-line"></div>

                                <p>
                                Wymiary u??ytkownika s?? niezb??dne dla poprawnego 
                                dobrania produkt??w takich jak ubrania.
                                </p>

                                <div className="after-register-inputs">
                                    <div className="after-register-input-wrapper">
                                        <label htmlFor="1">Wzrost:</label>
                                        <input 
                                            id="1"
                                            type="text"
                                            className="after-register-input"
                                            placeholder="170 CM"/>
                                    </div>

                                    <div className="after-register-input-wrapper">
                                        <label htmlFor="2">Obw??d bioder:</label>
                                        <input 
                                            id="2" 
                                            type="text" 
                                            className="after-register-input" 
                                            placeholder="170 CM"/>
                                    </div>

                                    <div className="after-register-input-wrapper">
                                        <label htmlFor="3">Obw??d talii:</label>
                                        <input 
                                            id="3" 
                                            type="text" 
                                            className="after-register-input" 
                                            placeholder="170 CM"/>
                                    </div>
                                </div>
                            </div>

                            <button className="after-register-btn" id="2" 
                            onClick={(e) => {this.goToNextBlock(e.target.id, e.target.id)}}>
                                DALEJ
                            </button>

                            <span 
                            className="after-register-span" 
                            id="2" 
                            onClick={(e) => {this.goToNextBlock(e.target.id, e.target.id)}}>
                            Pomi??
                            </span>

                        </div>

                        <div className="after-register-wrapper changing-content invisible" id="nr3">

                            <div className="after-register-block-second-inner longer" >
                                <h1>Podaj swoje rozmiary</h1>

                                <div className="after-register-line"></div>

                                <p>
                                Rozmiary u??ytkownika s?? niezb??dne dla poprawnego dobrania 
                                produkt??w takich jak ubrania.
                                </p>

                                <div className="after-register-card-wrapper">
                                    <div className="after-register-card" id="nr1" 
                                    onClick={(e) => {this.changeInput( (e.target.id).charAt(2) )}}>
                                        <img src={tShirt} alt="g??ra" id="nr1" />
                                        <span id="nr1">G??ra</span>
                                    </div>
                                    <div className="after-register-card" id="nr2"
                                    onClick={(e) => {this.changeInput( (e.target.id).charAt(2) )}}>
                                        <img src={pants} alt="g??ra" id="nr2" />
                                        <span id="nr2" >Spodnie</span>
                                    </div>
                                    <div className="after-register-card" id="nr3"
                                    onClick={(e) => {this.changeInput( (e.target.id).charAt(2) )}}>
                                        <img src={shoes} alt="g??ra" id="nr3" />
                                        <span id="nr3" >Buty</span>   
                                    </div>
                                    <div className="after-register-card" id="nr4"
                                    onClick={(e) => {this.changeInput( (e.target.id).charAt(2) )}}>
                                        <img src={cap} alt="g??ra" id="nr4" />
                                        <span id="nr4" >G??owa</span>
                                    </div>
                                </div>

                                <div className="after-register-inputs third-section">
                                    <div className="
                                        after-register-input-wrapper
                                        third-section
                                        changing-input
                                        invisible" 
                                    id="nr1">
                                            <label htmlFor="g">Rozmiar g??ry:</label>
                                            <input 
                                                id="g" 
                                                type="text" 
                                                className="after-register-input" 
                                                placeholder="S/M/L/XL"/>
                                    </div>

                                    <div className="
                                        after-register-input-wrapper
                                        third-section
                                        changing-input
                                        invisible" 
                                    id="nr2">
                                            <label htmlFor="s">Rozmiar spodni:</label>
                                            <input 
                                                id="s" 
                                                type="text" 
                                                className="after-register-input" 
                                                placeholder="40"/>
                                    </div>

                                    <div className="
                                        after-register-input-wrapper
                                        third-section
                                        changing-input
                                        invisible" 
                                    id="nr3">
                                            <label htmlFor="3">Rozmiar buta:</label>
                                            <input 
                                                id="3" 
                                                type="text" 
                                                className="after-register-input" 
                                                placeholder="42"/>
                                    </div>

                                    <div className="
                                        after-register-input-wrapper
                                        third-section
                                        changing-input
                                        invisible" 
                                    id="nr4">
                                            <label htmlFor="3">Rozmiar kapelusza/czapki:</label>
                                            <input 
                                                id="3" 
                                                type="text" 
                                                className="after-register-input" 
                                                placeholder="42"/>
                                    </div>
                                </div>

                            </div>

                            <button className="after-register-btn" id="3" 
                            onClick={(e) => {this.goToNextBlock(e.target.id, e.target.id)}}>
                                Dalej
                            </button>

                            <span 
                                className="after-register-span" 
                                id="3" 
                                onClick={(e) => {this.goToNextBlock(e.target.id, e.target.id)}}>
                                Pomi??
                            </span>

                        </div>

                        <div className="after-register-wrapper changing-content invisible" id="nr4">

                            <div className="after-register-block-second-inner longer" >
                                <h1>Interesuj??ce Ci?? tematy</h1>

                                <div className="after-register-line"></div>

                                <p>
                                    Dzi??ki nim b??dziemy w stanie dobra?? produkty 
                                    najbardziej pasuj??ce do ciebie i twojej rodziny.
                                </p>

                                <div className="after-register-tag-wrapper">
                                    <h3>Po prostu zaznacz interesuj??ce tagi.</h3>

                                    <div className="after-register-tag-wrapper-inner">
                                        <div className="inner-scroll">
                                        
                                            <input id="Technologia" type="checkbox" />
                                            <label htmlFor="Technologia" onClick={()=>{this.interestCheck('Technologia')}}>Technologia</label>

                                            <input id="Zabawa" type="checkbox" />
                                            <label htmlFor="Zabawa" onClick={()=>{this.interestCheck('Zabawa')}}>Zabawa</label>

                                            <input id="Sztuka" type="checkbox" />
                                            <label htmlFor="Sztuka" onClick={()=>{this.interestCheck('Sztuka')}}>Sztuka</label>

                                            <input id="Edukacja" type="checkbox" />
                                            <label htmlFor="Edukacja" onClick={()=>{this.interestCheck('Edukacja')}}>Edukacja</label>

                                            <input id="Podr????e" type="checkbox" />
                                            <label htmlFor="Podr????e" onClick={()=>{this.interestCheck('Podr????e')}}>Podr????e</label>

                                            <input id="Gotowanie" type="checkbox" />
                                            <label htmlFor="Gotowanie" onClick={()=>{this.interestCheck('Gotowanie')}}>Gotowanie</label>

                                            <input id="Zdrowie" type="checkbox" />
                                            <label htmlFor="Zdrowie" onClick={()=>{this.interestCheck('Zdrowie')}}>Zdrowie</label>

                                            <input id="Sport" type="checkbox" />
                                            <label htmlFor="Sport" onClick={()=>{this.interestCheck('Sport')}}>Sport</label>

                                            <input id="Moda" type="checkbox" />
                                            <label htmlFor="Moda" onClick={()=>{this.interestCheck('Moda')}}>Moda</label>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            

                            <button className="after-register-btn" id="4" 
                            onClick={(e) => {this.goToNextBlock(e.target.id)}}>
                                DALEJ
                            </button>

                            <span className="after-register-span">Pomi??</span>

                        </div>

                        <div className="after-register-wrapper changing-content invisible" id="nr5">
                            <div className="changing-content">

                                <div className="after-register-block-second-inner shorter" >
                                    <h1>Gotowe</h1>

                                    <div className="after-register-line"></div>

                                    <p>
                                    Teraz mo??esz w pe??ni korzysta?? z mo??liwo??ci serwisu CoZa500Plus.pl!
                                    </p>
                                </div>

                                <button className="after-register-btn" id="5" onClick={this.submitAfterData}>
                                    Ok
                                </button>

                            </div>
                        </div>

                    </section>

                    
                </div>
            </main>
        )
        
    }
   
}

export default AfterRegister