import React, {Component} from 'react';
import logo from '../../images/logo.png';
import notif from '../../images/notif.png';
import './header.css';


class Header extends Component {
    state = {
        mobileHeader:false,
        loggedIn:true, //HEADER DLA NIEZALOGOWANEGO: loggedIn:false
        user:''
    }

    componentDidMount(){
        window.addEventListener('resize', () => {
        if(window.innerWidth < 715 || window.innerHeight < 500){this.setState({mobileHeader:true})}
        else{this.setState({mobileHeader:false})}
        }, true);
        window.addEventListener('load', () => {
        if(window.innerWidth < 715 || window.innerHeight < 500) {
            this.setState({mobileHeader:true})
        } else {
            this.setState({mobileHeader:false})
        }

        });
    }

   

    handleClick = () => {
    const hamburger = document.querySelector('.ham1');
    const navigation = document.querySelector('.nav1');
    hamburger.classList.toggle('hamburger-active');
    navigation.classList.toggle('navigation-active');
    }

    HandleClickOpenNot = (event = '') => {
        let opt = document.querySelector('.notification-list.N2');
        let not = document.querySelector('.notification-list.N1');
        let helpWithHover2 = document.querySelector('.help-with-hover2');
        not.classList.toggle('none');
        if( event === 'MOUSEOVER' ){
            helpWithHover2.classList.remove('none');
          } else {
            helpWithHover2.classList.add('none'); 
          }
        if(!opt.classList.contains('none')){
            opt.classList.toggle('none');    
        }
    }
    HandleClickOpenOpt = (event = '') => {
        let helpWithHover1 = document.querySelector('.help-with-hover1');
        let opt = document.querySelector('.notification-list.N2');
        let not = document.querySelector('.notification-list.N1');
        opt.classList.toggle('none');
        //helpWithHover.classList.toggle('none');

        if( event === 'MOUSEOVER' ){
           helpWithHover1.classList.remove('none');
         } else {
           helpWithHover1.classList.add('none'); 
         }
        if(!not.classList.contains('none')){
            not.classList.toggle('none');    
        }
    }


render() {   
    //MOBILNE - ZALOGOWANY, OPCJE NA ZEWNATRZ     // TU WSTAWIC!!!!!!!!!!!!!!! x2(nazwa,img)
  const mobileLoggedInOutside= (
<div className="nav-g"> 
    <div className="header-grid">  
             
    </div>
</div> 
  )
  ///////////////////////////////

 //MOBILNE - ZALOGOWANY, OPCJE W SRODKU
  const mobileLoggedInInside= (
        <ul className="navigation-list">
            <li className="navigation-item"><a href="/">Home</a></li>
            <li className="navigation-item"><a href="/a">O nas</a></li>
            <li className="navigation-item"><a href="/w">Kontakt</a></li>
            <div className="break-line"></div>  
            <li className="navigation-item"><a href="/">Profil</a></li>
            <li className="navigation-item"><a href="/a">Oferty</a></li>
            <li className="navigation-item"><a href="/w">Bachory</a></li>
            <div className="break-line"></div>   
            <li className="navigation-item"><a href="/a">Loreeem</a></li>
            <li className="navigation-item"><a href="/w">Ipsum</a></li>  
            <div className="break-line"></div>               
        </ul>
  )
  ///////////////////////////////

//MOBILNE - NIEZALOGOWANY, OPCJE NA ZEWNATRZ
  const mobileLoggedOutOutside = (
    <a> </a>    
  )
  /////////////////////////

  //MOBILNE - NIEZALOGOWANY, OPCJE W SRODKU
  const mobileLoggedOutInside = (
        <ul className="navigation-list">
            <li className="navigation-item"><a href="/">Załóż konto</a></li>
            <li className="navigation-item"><a href="/">Zaloguj się</a></li>
            <div className="break-line"></div>
            <li className="navigation-item"><a href="/">Home</a></li>
            <li className="navigation-item"><a href="/a">O nas</a></li>
            <li className="navigation-item"><a href="/w">Kontakt</a></li>
            <div className="break-line"></div>  
            <li className="navigation-item"><a href="/">Cos tam</a></li>
            <li className="navigation-item"><a href="/a">Lorem</a></li>
            <li className="navigation-item"><a href="/w">Ipsum</a></li>                    
        </ul>
  )
    /////////////////////////
    ///////////* KONIEC MOBILNYCH */////////////////////////    2x (nazwa i img)!!!!!!!!!!!!!!!!!!!!!!!!
    
  const deskopLoggedIn =(
    <nav className="header-right in">
                <a className="basic-nav" href="#contact">HOME</a>
                <a className="basic-nav" href="#home">O NAS</a>
                <a className="basic-nav" href="#contact">KONTAKT</a>
                <div onMouseOut={this.HandleClickOpenOpt} onMouseOver={()=>{this.HandleClickOpenOpt('MOUSEOVER')}}
                    className="basic-nav user-options" href="#contact">KONTO
                    <div class="help-with-hover1 none"></div>
                    <div className="notification-list N2 none">
                        <ul>
                            <li className="notification-item-link">
                                <a href="">KNOTO</a>
                            </li>
                           
                            <li className="notification-item-link">
                                <a href="">KNOTO</a>
                            </li>

                            <li className="notification-item-link">
                                <a href="">KNOTO</a>
                            </li>

                            <li className="notification-item-line"></li>

                            <li className="notification-item-link">
                                <a href="">Co innego</a>
                            </li>

                            <li className="notification-item-link">
                                <a href="">Co innego</a>
                            </li>

                            <li className="notification-item-line"></li>

                            <li className="notification-item-link">
                                <a href="">KNOTO</a>
                            </li>

                            
                        </ul>
                    </div>
                    </div>
                   
                    <div className="notification"
                    onMouseOut={this.HandleClickOpenNot} onMouseOver={()=>{this.HandleClickOpenNot('MOUSEOVER')}}>
                        <div className="open-notification">
                            <img src={notif} alt="bell"/>
                        </div>
                        <div class="help-with-hover2 none"></div>
                        <div className="notification-list N1 none">
                            <ul>
                                <li className="notification-item-link bottom-line">
                                    <a href="">Oferty</a>
                                </li>
                                <li className="notification-item-link bottom-line">
                                    <a href="">Bachory</a>
                                </li>
                                <li className="notification-item-link bottom-line">
                                    <a href="">Cos jeszcze</a>
                                </li>
                                <li className="notification-item-link bottom-line">
                                    <a href="">Cos jeszcze</a>
                                </li>
                                <li className="notification-item-link bottom-line">
                                    <a href="">Oferty</a>
                                </li>
                                <li className="notification-item-link bottom-line">
                                    <a href="">Oferty</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
  ) ;
  const deskopLoggedOut= (
    <nav className="header-right out">
        <a className="basic-nav" href="#home">HOME</a>
        <a className="basic-nav" href="#home">O NAS</a>
        <a className="basic-nav" href="#contact">KONTAKT</a>
        <a className="basic-nav" href="#contact">ZALOGUJ SIĘ</a>
    </nav>
  )
  
  //SPRAWDZENIE CZY ZALOGOWANY
  const isLoggedMobileIn = this.state.loggedIn ? (mobileLoggedInInside) : (mobileLoggedOutInside)
  const isLoggedMobileOut = this.state.loggedIn ? (mobileLoggedInOutside) : (mobileLoggedOutOutside)
  const isLoggedDeskop = this.state.loggedIn ? (deskopLoggedIn) : (deskopLoggedOut)
  /////////////////////////////  

    const header = this.state.mobileHeader ? (
        <header>  
            <div className="header-mobile">
                <img class="header-logo-mobile" src={logo}/>
                {isLoggedMobileOut}
                <button className="hamburger ham1" onClick={this.handleClick}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner "></span>
                    </span>
                </button>
                
            <nav className="navigation nav1">
                {isLoggedMobileIn}
            </nav> 
            </div>
            <div className="filler-mobile"></div>
        </header>  

    ) : (

        <header>
            <div className="header">
            <a href="#default" className="logo">
                <img src={logo}/>
            </a>
                {isLoggedDeskop}
            </div>
            <div className="filler"></div>
        </header>

    )
   

    return ( 
        <div>{header}</div>
    )
}
  }
  
  export default Header;