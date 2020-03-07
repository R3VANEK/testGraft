import React from 'react'
import a from '../../../../images/a.png';
import '../userSettings.min.css';

const DeleteAccount = () => {
    return (
        <div className="delete-account">
            <h2>Usuwanie konta</h2>
            <div class="change-data-input-and-label">
                <label className="change-data-label" HtmlFor="username">Hasło</label>
                <input className="change-data-input" type="password" id="password"/>
            </div>
            <div class="change-data-input-and-label">
                <label className="change-data-label" HtmlFor="username">Powtórz hasło</label>
                <input className="change-data-input" type="password" id="repeatPassword"/>
            </div>
            <h2>Czy na pewno chcesz nas opuścić?</h2>
            <div>
                <img src={a} alt="Na pewno?" />
            </div>
            <button className="btn purple-btn">Usuń konto</button>
        </div>
    )
}

export default DeleteAccount
