import React from 'react';
import a from '../../../../images/a.png';
import '../userSettings.min.css';

const EditData = () => {
    return (
        <div className="edit-data">
            <h2>Twoje dane</h2>
            <div className="img-inside-img">
                <img src={a} alt="Ja" />
            </div>
            <div class="edit-profile-user-data-grid">
                <div class="user-data-first">
                    <img src="age.png" alt="dane"/>

                    <div class="user-data-input">
                        <label HtmlFor="userName">Nazwa</label>
                        <input type="text" id="userName"/>
                    </div>

                    <div class="user-data-input">
                        <label HtmlFor="userEmail">E-mail</label>
                        <input type="text" id="userEmail"/> 
                    </div>
                </div>

                <div class="edit-profile-line"></div>

                <div class="user-data-second">
                    <img src="age.png" alt="hasło"/>

                    <div class="user-data-input">
                        <label HtmlFor="userPass">Hasło</label>
                        <input type="text" id="userPass"/>
                    </div>
                    <div class="user-data-input">
                        <label HtmlFor="userNewPass">Wpisz nowe hasło</label>
                        <input type="text" id="userNewPass"/>     
                    </div>
                    <div class="user-data-input">
                        <label HtmlFor="userEmail">Powtórz nowe hasło</label>
                        <input type="text" id="userNewPassRep"/> 
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditData
