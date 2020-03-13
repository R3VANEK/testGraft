import React, {Component} from 'react';
import './register.min.css';
import fb from '../../images/fb.svg'

class Register extends Component {

    render(){ 
        return (
            <main className="container-register">
                <form className="register-form">
                    <div className="register-form-1st">
                        <div className="text-with-vertical-line">
                            <div className="anim-text-register">
                                <div className="anim-text-register-child b1">
                                    Szybki i nieograniczny spis ofert, które pokochasz!
                                </div>
                                <div className="anim-text-register-child b2">
                                    Znajdź produkty, które pokochasz!
                                </div>
                                <div className="anim-text-register-child b3">
                                    Zarejestruj się, aby poznać nowy wymiar zakupów online!
                                </div>
                                <div className="anim-text-register-child b4">
                                    Szybki i nieograniczny spis ofert, które pokochasz!
                                </div>
                            </div>
                        </div>
                        <p className="register-form-1st-p">
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
                            <img src={fb} />
                            <span>Użyj facebooka</span>
                             
                            </button>
                        </div>
                        <div className="checkbox-and-text">
                            <div className="register-checkbox">
                                <input className="register-checkbox" type="checkbox" name="regulations"/>
                            </div>
                            <div className="text">
                                <p>Akceptuje warunki umowy bla bla bla bla bal</p>
                            </div>
                        </div>
                        <div className="checkbox-and-text">
                            <div className="register-checkbox">
                                <input className="register-checkbox" type="checkbox" name="receive-not"/>
                            </div>
                            <div className="text">
                                <p>Akceptuje warunki umowy bla bla bla bla bal asd sad asd asd as asd asd as</p>
                            </div>
                        </div>
                        <input type="submit" value="Zarejestruj się" className="btn purple-btn" />
                    </div>
                </form>
            </main>
        )
    }
}

export default Register
