import React, {Component} from 'react'
import baner2  from '../../images/baner2.svg'
import plus500 from '../../images/biale-tlo.png'
import videoNr1 from '../../videos/film1.mp4'
import videoNr2 from '../../videos/troska.mp4'
import './home.css'
import karta from '../../images/karta.png'
import chmura from '../../images/chmura.png'
import n1 from '../../images/nl.png'
import exit from '../../images/exit.png'
import bank from '../../images/Bank.svg'
import voucher from '../../images/Voucher.svg'
import flame from '../../images/Flame.svg'
import purchase from '../../images/purchase.svg'
import screen2 from '../../images/screen2.svg'
import contact from '../../images/contact.svg'

///
import krolik from '../../images/krolik.svg'
import simple from '../../images/simple.svg'
import oszczedzaj from '../../images/oszczedzaj.svg'
import spokoj from '../../images/spokoj.svg'
import target from '../../images/target.svg'
///
/****HOME ANIMATIONS***** */

import {
    handleScrollOfOtherFields,
    handleClick,
    handleClick2,
    handleClickOv,
    handleOnLoad,
    handleScrollOfHomeCards,
    handleScroll
       } from '../../functions/homeAnimationsHelper';


/************************ */

//import {createCookie, readCookie} from '../../functions/cookiesMethods'


class Home extends Component {

            state = {
                isNewsLetterActive :false
            }
    
            componentDidMount() {
                window.addEventListener('scroll', handleScroll, true);
                window.addEventListener('load', handleScroll, true);


        /********** NEWSLETTER ***********/

               /* this.showNewsLetter = setTimeout( () => {                                  
                    this.setState({
                    isNewsLetterActive:true
                    })
                    console.log("AAAA")
                    
                    this.toggleBlurAndOverlay();

                }, 3000)   */

        /********** NEWSLETTER ***********/
         }

         componentWillUnmount(){
             //clearTimeout(this.showNewsLetter)
         }

         
                        
            /***** COMMENTED CODE ALLOWS TO SHOW NEWSLETTER ONCE A DAY *****/
            
               // if( readCookie('showNewsLetter')===null ){
                 //   createCookie('showNewsLetter','1', 1)
                 
                 
                 //if(this.props)
                     
                
              //  }                                          
            
    
         toggleBlurAndOverlay = () => {
                        let header = document.querySelector('header')
                        let container = document.querySelector('.container')
                        let footer = document.querySelector('footer')
                        const overlay = document.querySelector('.overlay');
                        if(overlay){
                        overlay.classList.toggle('hidden');
                        header.classList.toggle('blur')
                        container.classList.toggle('blur')
                        footer.classList.toggle('blur')
                        }
                    }
                
                    
                
                        
                
                        
                
                        
                        
                        
                        closeNewsLetter = () => {
                            this.setState({
                                isNewsLetterActive:false
                            })
                            this.toggleBlurAndOverlay();
                        }
    
        render() { 
    
            const newsLetter = this.state.isNewsLetterActive ? (
    
                <div className="newsletter">
                    <div className="newsletter-left">
                        <div className="flying-exit" onClick={this.closeNewsLetter}>
                            <img src={exit} alt="close"/>
                        </div>
                        <img src={n1} alt="bell"/>
                    </div>
                    <div className="newsletter-right">
                        <h1>Witaj!</h1>
                        <h3>B??d?? na bie????co z nowo??ciami zwi??zanymi z serwisem</h3>
                        <form>
                            <input type="email" required placeholder="Podaj sw??j adres e-mail."/>
                        </form>
    
                        <input type="submit" value="Gotowe!" className="btn purple-btn"/>
                    </div>
                </div>
    
            ) : (
                ''
            )
    
            return ( 
    <main className="landing-page">  
        {newsLetter}
        <div className="video2 hidden" onClick={(e)=>{handleClick2(e)}} >
            <video  controls className="video">
                <source src={videoNr1}   type="video/mp4"/>
            </video>
        </div>
      <div className="container">
        
    
       <div className="overlay hidden" onClick={handleClickOv}></div>
    
                <div className="video1 hidden" onClick={handleClick} >
                    
                </div>
    
                
    
    
        <section className="grid  special" onScroll={handleScroll} onLoad={handleOnLoad}>
            <div className="grid-elem-1">
            <h1 className="big-h1">Zapewnij sobie</h1>

                <div className="anim-word">
                    <div className="anim-cont">
                        <div className="anim a1">WYGOD??!</div>
                        <div className="anim a2">SPOK??J!</div>
                        <div className="anim a3">PEWNO????!</div>
                        <div className="anim a4">CZAS!</div>
                        <div className="anim a5">SZYBKO????!</div>
                        <div className="anim a6">WYGOD??!</div>
                    </div>
                </div>
                
                <div className="button-and-text-wrapper">
                    <button className="btn purple-btn"><i className="fas fa-eye"></i>&nbsp;ZACZNIJ!</button>
                    <a href="/">Dowiedz si?? wi??cej!</a>
                </div>

                <i><p>
                    Masz prawo odpocz???? od irytuj??cych, nietrafionych ofert i niechcianych ofert.
                    Pragniemy Ci udost??pni?? proste i przejrzyste narz??dzie, kt??re pozwoli Ci oszcz??di??
                    czas nerwy i pieni??dze.
                </p></i>       
            </div>
    
             <div className="grid-elem-2">
                <div className="cent">
                    <img  src={chmura} alt="cloud"/>
                    <img src={karta} alt="card" className="over-img vert-move"/>
                </div>
            </div>
        </section>

        <section className="home-section">
            <h1>Co zyskasz u??ywaj??c naszej platformy?</h1>
            <h2>Jeste?? unikalny, korzystaj??c z naszej aplikacji nigdy ju?? nie b??dziesz ???Kolejnym klientem???.</h2>
            <div className="home-section-inner">
                <div className="home-card">
                    <img src={oszczedzaj} alt="obraz" />
                    <h2>Oszcz??dno????</h2>
                    <p>Dzi??ki naszej platformie zaoszcz??dzisz cz?????? swoich pieni??dzy.</p>
                </div>
                <div className="home-card">
                    <img src={spokoj} alt="obraz" />
                    <h2>SPOK??J</h2>
                    <p>Odpocznij od nachalnych ofert i natarczywego wciskania.</p>
                </div>
                <div className="home-card">
                    <img src={target} alt="obraz" />
                    <h2>PEWNO????</h2>
                    <p>Otrzymuj dok??adnie to na czym ci zale??y pomijaj??c to co ci?? nie interesuje.</p>
                </div>
                <div className="home-card">
                    <img src={krolik} alt="obraz" />
                    <h2>SZYBKO????</h2>
                    <p>Zoszcz??d?? sw??j czas i szybko skompletuj zakupy.</p>
                </div>
                <div className="home-card">
                    <img src={simple} alt="obraz" />
                    <h2>PROSTOTE</h2>
                    <p>Zaplanuj swoje zakupy bez zb??dnych utrudnie??.</p>
                </div>
            </div>
        </section>
    
        <section className="grid purple">
                <div className="grid-elem-1">
                    <h1 className="big-h1">Zakupy w internecie, po Twojemu</h1>
                    <i><p>NIEZALE??NIE CZY TO NOWY UPOMINEK, UBRANIE CZY UPRAGNIONA WYCIECZKA.</p></i>
                    <p>Jeste?? unikalny, korzystaj??c z naszej aplikacji nigdy ju?? nie b??dziesz "Kolejnym klientem".</p> 
    
                    <button className="btn purple-btn" onClick={handleClick2}>
                        <i className="fas fa-play-circle icon"></i>Zobacz video
                    </button>
                </div>
                <div className="grid-elem-2">
                    <img className="moving left" src={screen2} alt="offer"/>
                </div>
        </section>
    
        <section className="grid">
                <div className="grid-elem-1">
                    <h1 className="big-h1">Postaw na wyj??tkowo????</h1>
                    <i><p>NIGDZIE NIE MA IDENTYCZNEGO P??ATKU ??NIEGU, PODOBNIE JEST Z GUSTAMI. KA??DYM MA INNY I TO JEST PI??KNE</p></i>
                    <p>Sprzeciw si?? traktowaniu ka??dego z klient??w jednakowo. W ko??cu nie jeste?? jak inni.</p> 
                    <div className="text-and-img">
                    <img className="moving left" src={bank} alt=""/><br/>
                    OSZCZ??DZAJ
                    </div>
                    <div className="text-and-img">
                    <img className="moving left" src={voucher} alt=""/><br/>
                    OTRZYMUJ
                    </div>
                    <div className="text-and-img">
                    <img className="moving left" src={flame} alt=""/><br/>
                    PROMUJ
                    </div>
                </div>
                <div className="grid-elem-2">
                    <img className="moving left" src={purchase} alt=""/>
                </div>
        </section>
    
        <section className="grid purple">  
                <div className="grid-elem-1">
                    <h1 className="big-h1">Ju?? wkr??tc??</h1>
                    <i><p>ZAPEWNIJ NAJBLI??SZYM ??WIETLAN?? PRZYSZ??O????. W PROSTY SPOS??B ZNAJD?? NAJLEPSZE FUNDUSZE OSZCZ??DNO??CIOWE</p></i>
                    <p>spos??b aby zatroszczy?? si?? o przysz??o???? bliskich!</p> 
                    <p>POMY??L O PRZYSZ??O??CI, TO SI?? OP??ACI...</p>
                    <button className="btn purple-btn">Wkr??tce  </button>
                </div>
                <div className="grid-elem-2 with-vid">
                    <video  controls >
                    <source src={videoNr2}  type="video/mp4"/>
                    </video>
                </div>
        </section>
        <h1 className="violet-big-margin big-h1">Skontaktuj si??!</h1>
        <section className="grid odd">
                <div className="grid-elem-1">
                    <form>
                        <h3>Nazwa</h3>
                        <input type="text" required/>
                        <h3>e-mail</h3>
                        <input type="email" required/>
                        <h3>Tre????</h3>
                        <textarea required max-length="1000" name="mess" id="mess" cols="30" rows="10"></textarea><br/>
                        <button className="btn purple-btn"><i className="far fa-paper-plane icon"></i>Wy??lij</button>
                    </form>
                    <h3>Lub</h3>
                    <h3>Napisz na ten adres E-mail!</h3>
                    <h3>kontakt@coza500plus.pl</h3>
                    
                </div>
                <div className="grid-elem-2">
                    <img src={contact} alt="message"/>
                    <h1 className="icon-fb">/COZA500PLUS</h1>
                    <h1 className="icon-insta">@COZA500PLUS</h1>
                </div>
        </section>
    
        <section className="grid purple">
                <div className="grid-elem-1">
                    <h1>??WIAT WSPANIA??YCH OFERT STOI PRZED TOB?? OTWOREM!</h1>
                    <img src={plus500} alt="500plus"/>
                    <h2>OSZCZ??DZAJ, OTRZYMUJ, PROMUJ</h2>
                    <h2>PREMIERA W LISTOPADZIE...</h2>
                </div>
                <div className="grid-elem-2">
                    <img src={baner2} alt=""/>
                </div>
        </section>
     
      </div>
    </main> 
            )
        }
        }

export default Home;
