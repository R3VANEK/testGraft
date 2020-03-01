import React, {Component} from 'react'

import {NavLink} from 'react-router-dom'
import logo from '../../images/logo.png'

class headerMobile extends Component {

    handleClick = () => {
        const hamburger = document.querySelector('.hamburger');
        const navigation = document.querySelector('.navigation');
        hamburger.classList.toggle('hamburger-active');
        navigation.classList.toggle('navigation-active');
    }
    
    render() {
    return (
        
    <header>  
        <div class="header-mobile">
            <img src={logo}/>
            <button class="hamburger" onClick={this.handleClick}>
                <span class="hamburger-box">
                    <span class="hamburger-inner "></span>
                </span>
            </button>
            <div class="navigation">
                <ul class="navigation-list">
                    <li class="navigation-item"><NavLink exact to="/">Home</NavLink></li>
                    <li class="navigation-item"><NavLink to="/a">O nas</NavLink></li>
                    <li class="navigation-item"><NavLink to="/w">Kontakt</NavLink></li>
                    <li class="navigation-item"><NavLink to="/b">Logowanie</NavLink></li>
                </ul>
            </div> 
        </div>
        <div class="filler-mobile"></div>
    </header>  
        
            
        
    )
}
}

export default headerMobile
