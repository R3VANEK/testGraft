import React, {Component} from 'react';
import './register.min.css';

class Register extends Component {

    render(){ 
        return (
            <div className="container">
                <form className="register-form">
                    <div className="register-form-1st">
                        <div className="text-with-vertical-line">
                            Szybki i nieograniczny spis ofert, które pokochasz!
                        </div>
                        <p>
                            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro.
                            De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo
                            vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.
                        </p>
                    </div>
                    <div className="register-form-2nd">
                        <div className="title-with-underline">
                            Zarejestruj się!
                        </div>
                        <input className="input-1" type="text" placeholder="Podaj swój nick/pseudonim..." name="name"/>
                        <input className="input-1" type="mail" placeholder="Podaj swój email..." name="mail"/>
                        <input className="input-1" type="password" placeholder="Podaj nowe hasło..." name="password"/>
                        <input className="input-1" type="password" placeholder="Powtórz hasło..." name="repPassword"/>
                        <div className="captcha-fb-block">
                            <div className="captcha">
                                -CAPTCHA-
                            </div>
                            <button className="btn-fb">
                                Zarejestruj się przez facebooka
                            </button>
                        </div>
                        <div className="checkbox-and-text">
                            <input className="register-checkbox" type="checkbox" name="regulations"/>
                           <p>Akceptuje warunki umowy bla bla bla bla bal</p>
                        </div>
                        <div className="checkbox-and-text">
                            <input className="register-checkbox" type="checkbox" name="receiveNotif"/>
                            <p>Akceptuje warunki umowy bla bla bld da bdddd d d d d d dla bal asd dd</p>
                        </div>
                        <input type="submit" value="Zarejestruj się" className="btn purple-btn" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Register
