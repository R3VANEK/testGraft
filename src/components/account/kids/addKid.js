import React, {useState} from 'react';
import exit from '../../../images/x.png';
import boyAvatar from '../../../images/Boy Avatar.svg';
import plusCircle from '../../../images/plusCircle.svg';
import {removeAll} from '../../../functions/userAccountHelplers';
import './kids.min.css';


const AddKid = () => {

    const [name , changeName] = useState("");
    const [height , changeHeight] = useState(100);
    const [age , changeAge] = useState(10);
    const [shoeSize , changeShoeSize] = useState(20);
    const [gender , changeGender] = useState('');
    const [color , changeFavColor] = useState('Czerwony');

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

                }
            }
        }
    }
    const changeFavouriteColor = (e) => {
        changeFavColor(e.target.value);
    }
    const changeFavouriteGender = (e) => {
        changeGender(e.target.id);
    }

    return (
        <div className="add-child-block">
            <form action="">
                <div className="flying-exit" >
                    <img src={exit} alt="wyjście" 
                    onClick={removeAll}/>
                </div>
                <h2>Dodaj nowego członka</h2>
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
                        <select name="favColor" id="favColor" className="input-select"
                        onChange={(e)=> {changeFavouriteColor(e)}}>
                        <option value="Czerwony">Czerwony</option>
                        <option value="Żólty">Żólty</option>
                        <option value="Zielony">Zielony</option>
                        <option value="Pomarańczowy">Pomarańczowy</option>
                        <option value="Niebieski">Niebieski</option>
                        <option value="Granatowy">Granatowy</option>
                        <option value="Fioletowy">Fioletowy</option>
                        <option value="Różowy">Różowy</option>
                        <option value="Czarny">Czarny</option>
                        <option value="Brązowy">Brązowy</option>
                        <option value="Biały">Biały</option>
                        </select>
                        
                    </div>
                </div>

                <div className="input-sex">
                    <div>
                        <input name="sex" id="m" type="radio" onChange={(e) => {changeFavouriteGender(e)}}/>
                        <label className="first-label" htmlFor="m">Chłopiec</label>
                    </div>
                    <div>
                        <input name="sex" id="k" type="radio" onChange={(e) => {changeFavouriteGender(e)}}/>
                        <label className="second-label" htmlFor="k">Dziewczynka</label>
                    </div>
                </div>

                <button className="btn purple-btn">
                   Zapisz
                </button>
            </form>   
        </div>
    )
}

export default AddKid
