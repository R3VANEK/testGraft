import React, {Component} from 'react';
import './register.min.css';

class Register extends Component {

    render(){ 
        return (
            <div className="container">
                <form className="register-form">
                    <div className="register-form-1st">
                    
                    </div>
                    <div className="register-form-2nd">
                        <div className="title-with-underline">
                            Zarejestruj się!
                        </div>
                        <input className="input-1" type="text" placeholder="Podaj swój nick/pseudonim..." name="name"/>
                        <input className="input-1" type="mail" placeholder="Podaj swój email..." name="mail"/>
                        <input className="input-1" type="password" placeholder="Podaj nowe hasło..." name="password"/>
                        <input className="input-1" type="password" placeholder="Powtórz hasło..." name="repPassword"/>
                        <div className="captcha-fb-container">
                            <div className="captcha">

                            </div>
                            <button className="btn-fb">
                                Zaloguj się przez facebooka
                            </button>
                        </div>
                        <div className="checkbox-and-text">
                            <input type="checkbox" name="regulations"/>
                            Akceptuje warunki umowy bla bla bla bla bal
                        </div>
                        <div className="checkbox-and-text">
                            <input type="checkbox" name="receiveNotif"/>
                            Akceptuje warunki umowy bla bla bla bla bal asd dd
                        </div>
                        <input type="submit" value="Zarejestruj się" className="btn-2" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Register
