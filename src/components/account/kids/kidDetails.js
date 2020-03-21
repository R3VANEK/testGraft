import React, {useState, useEffect} from 'react';
import exit from '../../../images/x.png';
import boyAvatar from '../../../images/Boy Avatar.svg';
import plusCircle from '../../../images/plusCircle.svg';
import {removeAll} from '../../../functions/userAccountHelplers';
import './kids.min.css';


const KidDetails = (props) => {

    const [name , changeName] = useState(props.kid.name);
    const [height , changeHeight] = useState(props.kid.height);
    const [age , changeAge] = useState(props.kid.age);
    const [shoeSize , changeShoeSize] = useState(props.kid.shoeSize);
    const [favColor, changeFavColor] = useState(props.kid.favColor);
    const [gender, changeGender] = useState(props.kid.gender);
    const [id, changeId] = useState(props.kid.id);

    useEffect( () => {
        if(id !== props.kid.id){
            
        changeShoeSize(props.kid.shoeSize);
        changeName(props.kid.name);
        changeHeight(props.kid.height);
        changeAge(props.kid.age);
        changeFavColor(props.kid.favColor);
        changeGender(props.kid.gender);
        changeId(props.kid.id)

        }
    }, [
          id, 
          props.kid.id,
          props.kid.shoeSize,
          props.kid.name,
          props.kid.height,
          props.kid.age,
          props.kid.favColor,
          props.kid.gender
        ]
    )

    const changeValueWithInput = (e,  name) => {
        switch(name){
            case 'NAME':
                changeName(e.target.value); break;
            case 'HEIGHT':
                changeHeight(e.target.value); break;
            case 'AGE':
                changeAge(e.target.value); break;
            case 'SHOE_SIZE':
                changeShoeSize(e.target.value); break;
            case 'COLOR':
                changeFavColor(e.target.value); break; 
                
            default: break;
        }
    }

    const changeValueWithButton = (e, sign, name) => {
        e.preventDefault();

        if(sign === '+') {
            let value = ++e.target.previousElementSibling.value;
            switch(name){
                case 'HEIGHT':
                    changeHeight(value); break;
                case 'AGE':
                    changeAge(value); break;
                case 'SHOE_SIZE':
                    changeShoeSize(value); break;   
                    
                default: break;
            }

        } else if (sign ==='-') {
            let value = e.target.nextElementSibling.value;
            
            if(value > 1) {
                value--;
                switch(name){
                    case 'HEIGHT':
                        changeHeight(value); break;
                    case 'AGE':
                        changeAge(value); break;
                    case 'SHOE_SIZE':
                        changeShoeSize(value); break;  
                    
                    default: break;

                }
            }
        }
    }

    const submitChanges = (e) => {
        e.preventDefault();

        const changedKid = {
            name,
            height,
            shoeSize,
            age,
            favColor,
            gender
        }
        console.log(changedKid);
    }

    return (
        <div className="edit-child-block">
            <form onSubmit={submitChanges}>
                <div className="flying-exit" >
                    <img src={exit} alt="wyjście" 
                    onClick={removeAll}/>
                </div>
                <h2>Zmień dane dziecka</h2>
                    <div className="kid-img img-inside-img">
                        <img src={boyAvatar} alt="Skarb"/>   
                        <img className="img-on-img" src={plusCircle} alt="Skarb"/> 
                    </div>
                    
                
                    <div className="edit-child-text">
                        
                        <input className="kid-text-input" type="text" placeholder="Imię"
                        value={name}
                        onChange={(e) => {changeValueWithInput(e, 'NAME')}}/>

                    </div>
                <div className="child-F-grid">
                    <div className="edit-child-text">
                        Wzrost: [CM] <br/>
                        <div className="input-number">
                            <button 
                            onClick={(e) => {changeValueWithButton(e, '-', 'HEIGHT')}}
                            >-</button>
                            <input type="number" 
                             value={height}
                             onChange={(e) => {changeValueWithInput(e, 'HEIGHT')}}
                             name="height"
                            />
                            <button 
                            onClick={(e) => {changeValueWithButton(e, '+', 'HEIGHT')}}
                            >+</button>
                        </div>
                    </div>
                    <div className="edit-child-text">
                        Wiek: <br/>
                        <div className="input-number">
                            <button
                            onClick={(e) => {changeValueWithButton(e, '-', 'AGE')}}
                            >-</button>
                            <input type="number"
                            value={age}
                            onChange={(e) => {changeValueWithInput(e, 'AGE')}} 
                             name="age"
                            />
                            <button
                            onClick={(e) => {changeValueWithButton(e, '+', 'AGE')}}
                            >+</button>
                        </div>
                    </div>
                    <div className="edit-child-text">
                        Rozmiar buta: <br/>
                        <div className="input-number">
                            <button
                            onClick={(e) => {changeValueWithButton(e, '-', 'SHOE_SIZE')}}
                            >-</button>
                            <input type="number" 
                            value={shoeSize}
                            onChange={(e) => {changeValueWithInput(e, 'SHOE_SIZE')}}
                            name="sizeOfShoe"
                            />
                            <button
                            onClick={(e) => {changeValueWithButton(e, '+', 'SHOE_SIZE')}}
                            >+</button>
                        </div>
                    </div>
                    <div className="edit-child-text">
                        Kolor: <br/>
                        <input className="input-color" type="text"
                        value={favColor} 
                        onChange={(e)=>changeValueWithInput = (e,  'COLOR')}/>
                    </div>
                </div>

                <div className="add-kid-input-sex">
                    <div>
                        <input name="sex" id="male" type="radio" />
                        <label className="first-label" htmlFor="male">Chłopiec</label>
                    </div>
                    <div>
                        <input name="sex" id="female" type="radio"/>
                        <label className="second-label" htmlFor="female">Dziewczynka</label>
                    </div>
                </div>

                <button className="btn purple-btn">
                   Zapisz
                </button>
            </form>   
        </div>
    )
}

export default KidDetails
