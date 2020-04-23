import React, {Component} from 'react'
import kreski from '../../../../../images/jakiesKreski.svg';
import a from '../../../../../images/a.png';
import logout from '../../../../../images/logout.svg';
import {toggleLogoutActivity} from '../../../../../functions/userAccountHelplers';

class activityOnAccount extends Component {

    render(){
        return (
            <div className="fade-in">
                <div className="activity-header">
                    <div className="activity-header-1st">
                        <img src={kreski} alt="aktywność" />
                    </div>
                    <div className="activity-header-2nd" >
                        <h2>Aktywność na koncie</h2>
                        <p>Sprawdź miejsca i urządzenia  powiązane z twoim kontem.</p>
                    </div>
                </div>
                <div className="active-login">
                    <div className="active-login-1st">
                        <img src={a} alt="device" />
                    </div>
                    <div className="active-login-2nd">
                        <h2>Windows Chrome</h2>
                        <p>Londyn | 255.0.0.0</p>
                    </div>
                    <div className="active-login-3rd" onClick={toggleLogoutActivity}>
                        <img src={logout} alt="logout" />
                    </div>
                </div>
                <div className="active-login">
                    <div className="active-login-1st">
                        <img src={a} alt="device" />
                    </div>
                    <div className="active-login-2nd">
                        <h2>Windows Chrome</h2>
                        <p>Londyn | 255.0.0.0</p>
                    </div>
                    <div className="active-login-3rd" onClick={toggleLogoutActivity}>
                        <img src={logout} alt="logout" />
                    </div>
                </div>
            </div>
        )
    } 
}

export default activityOnAccount
