import React from 'react';
import a from '../../../../images/a.png';
import plusCircle from '../../../../images/plusCircle.svg';
import '../userSettings.min.css';

const EditData = () => {
    return (
        <div className="edit-data">
            <h2>Twoje dane</h2>
            <div className="img-inside-img">
                <img src={a} alt="Ja" />
                <img className="img-on-img" src={plusCircle} alt="zmień"/>
            </div>
            <div class="change-data-block">
                <div class="change-data-first">
                    <img src={a} alt="dane"/>

                    <div class="change-data-input-and-label">
                        <label className="change-data-label" HtmlFor="username">Nazwa</label>
                        <input className="change-data-input" type="text" id="username"/>
                    </div>

                    <div class="change-data-input-and-label">
                        <label className="change-data-label" HtmlFor="userEmail">E-mail</label>
                        <input className="change-data-input" type="text" id="userEmail"/> 
                    </div>
                </div>

                <div class="change-data-line"></div>

                <div class="change-data-second">
                    <img src={a} alt="hasło"/>

                    <div class="change-data-input-and-label">
                        <label className="change-data-label" HtmlFor="userPass">Hasło</label>
                        <input className="change-data-input" type="text" id="userPass"/>
                    </div>
                    <div class="change-data-input-and-label">
                        <label className="change-data-label" HtmlFor="userNewPass">Wpisz nowe hasło</label>
                        <input className="change-data-input" type="text" id="userNewPass"/>     
                    </div>
                    <div class="change-data-input-and-label">
                        <label className="change-data-label" HtmlFor="userEmail">Powtórz nowe hasło</label>
                        <input className="change-data-input" type="text" id="userNewPassRep"/> 
                    </div>
                </div>
            </div>
            <button className="btn purple-btn">Zmień dane</button>
        </div>
    )
}

export default EditData
