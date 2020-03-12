import React, {Component} from 'react'
import baner2  from '../../images/baner2.svg'
import plus500 from '../../images/biale-tlo.png'
import videoNr1 from '../../videos/reklama.mp4'
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
import {createCookie, readCookie} from '../../functions/cookiesMethods'


class Home extends Component {

            state = {
                isNewsLetterActive :false
            }
    
            componentDidMount() {
                window.addEventListener('scroll', this.handleScroll, true);
                window.addEventListener('load', this.handleScroll, true);

                this.showNewsLetter = setTimeout( () => {                                  
                    this.setState({
                    isNewsLetterActive:true
                    })
                    console.log("AAAA")
                    
                    this.toggleBlurAndOverlay();

                }, 3000)   
         }

         componentWillUnmount(){
             clearTimeout(this.showNewsLetter)
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
                
                     handleOnLoad = (e) => {
                            const movingLeft = document.querySelectorAll(".moving.left"); 
                            const movingRight = document.querySelectorAll(".moving.right");
                            
                            movingLeft.forEach( (e) => {
                               
                                if( parseInt(window.innerHeight + window.scrollY-
                                (e.clientHeight) - e.getBoundingClientRect().top) > 0){
                                e.classList.add('from-left-move'); 
                                }    
                            })
                            movingRight.forEach( (e) => {
                                if( parseInt(window.innerHeight + window.scrollY-
                                (e.clientHeight) - e.getBoundingClientRect().top) > 0){
                                e.classList.add('from-right-move'); 
                                }    
                            })
                           
                        }
                
                        
                
                        handleScroll = (e) => {                   
                            const movingLeft = document.querySelectorAll(".moving.left"); 
                            const movingRight = document.querySelectorAll(".moving.right");
                            
                            movingLeft.forEach( (e) => {
                                if( parseInt(window.innerHeight + window.scrollY -
                                (e.clientHeight)  - e.getBoundingClientRect().top) > 0){
                                e.classList.add('from-left-move'); 
                                }    
                            })
                            movingRight.forEach( (e) => {
                                if( parseInt(window.innerHeight + window.scrollY -
                                (e.clientHeight) - e.getBoundingClientRect().top) > 0){
                                e.classList.add('from-right-move'); 
                                }    
                            })  
                        }
                
                        handleClick = () => {
                            const showVideo = document.querySelector('.video1');
                            
                            showVideo.classList.toggle('hidden');
                            
                        }
                
                        handleClickOv = () => {
                            const showVideo = document.querySelector('.video1');
                            const showVideo2 = document.querySelector('.video2');
                            
                            this.toggleBlurAndOverlay();
    
                            this.setState({
                                isNewsLetterActive:false
                            })
                            if(showVideo.classList.contains('hidden')){
                               showVideo2.classList.add('hidden');           
                            }
                            else showVideo.classList.add('hidden');     
                        }
                        handleClick2 = (e) => {

                            if( !(e.target.classList.contains('video')) ) {
                                const showVideo2 = document.querySelector('.video2');
                                if(showVideo2.classList.contains('hidden')){
                                    showVideo2.childNodes[0].play(); 
                                }else{
                                    showVideo2.childNodes[0].pause();
                                }
                                    
                                this.toggleBlurAndOverlay();
                                showVideo2.classList.toggle('hidden');
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
                        <h3>Bądź na bieżąco z nowościami związanymi z serwisem</h3>
                        <form>
                            <input type="email" required placeholder="Podaj swój adres e-mail."/>
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
        <div className="video2 hidden" onClick={(e)=>{this.handleClick2(e)}} >
            <video  controls className="video">
                <source src={videoNr1}   type="video/mp4"/>
            </video>
        </div>
      <div className="container">
        
    
       <div className="overlay hidden" onClick={this.handleClickOv}></div>
    
                <div className="video1 hidden" onClick={this.handleClick} >
                    
                </div>
    
                
    
    
        <section className="grid  special" onScroll={this.handleScroll} onLoad={this.handleOnLoad}>
            <div className="grid-elem-1">
            <h1 className="big-h1">Zapewnij sobie</h1>

                <div class="anim-word">
                    <div class="anim-cont">
                        <div class="anim a1">WYGODĘ!</div>
                        <div class="anim a2">SPOKÓJ!</div>
                        <div class="anim a3">PEWNOŚĆ!</div>
                        <div class="anim a4">CZAS!</div>
                        <div class="anim a5">SZYBKOŚĆ!</div>
                        <div class="anim a6">WYGODĘ!</div>
                    </div>
                </div>
                
                <button className="btn purple-btn"><i class="fas fa-eye"></i>&nbsp;ZACZNIJ!</button>
                <i><p>
                    Masz prawo odpocząć od irytujących, nietrafionych ofert i niechcianych ofert.
                    Pragniemy Ci udostępnić proste i przejrzyste narzędzie, które pozwoli Ci oszczędić
                    czas nerwy i pieniądze.
                </p></i>       
            </div>
    
             <div className="grid-elem-2">
                <div className="cent">
                    <img  src={chmura} alt="cloud"/>
                    <img src={karta} alt="card" className="over-img vert-move"/>
                </div>
            </div>
        </section>
    
        <section className="grid purple">
                <div className="grid-elem-1">
                    <h1 className="big-h1">Zakupy w internecie, po Twojemu</h1>
                    <i><p>NIEZALEŻNIE CZY TO NOWY UPOMINEK, UBRANIE CZY UPRAGNIONA WYCIECZKA.</p></i>
                    <p>Jesteś unikalny, korzystając z naszej aplikacji nigdy już nie będziesz "Kolejnym klientem".</p> 
    
                    <button className="btn purple-btn" onClick={this.handleClick2}>Zobacz video</button>
                </div>
                <div className="grid-elem-2">
                    <img className="moving left" src={screen2} alt="offer"/>
                </div>
        </section>
    
        <section className="grid">
                <div className="grid-elem-1">
                    <h1 className="big-h1">Postaw na wyjątkowość</h1>
                    <i><p>NIGDZIE NIE MA IDENTYCZNEGO PŁATKU ŚNIEGU, PODOBNIE JEST Z GUSTAMI. KAŻDYM MA INNY I TO JEST PIĘKNE</p></i>
                    <p>Sprzeciw się traktowaniu każdego z klientów jednakowo. W końcu nie jesteś jak inni.</p> 
                    <div className="text-and-img">
                    <img className="moving left" src={bank} alt=""/><br/>
                    OSZCZĘDZAJ
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
                    <h1 className="big-h1">Już wkrótcę</h1>
                    <i><p>ZAPEWNIJ NAJBLIŻSZYM ŚWIETLANĄ PRZYSZŁOŚĆ. W PROSTY SPOSÓB ZNAJDŹ NAJLEPSZE FUNDUSZE OSZCZĘDNOŚCIOWE</p></i>
                    <p>sposób aby zatroszczyć się o przyszłość bliskich!</p> 
                    <p>POMYŚL O PRZYSZŁOŚCI, TO SIĘ OPŁACI...</p>
                    <button className="btn purple-btn">Wkrótce  </button>
                </div>
                <div className="grid-elem-2 with-vid">
                    <video  controls >
                    <source src={videoNr2}  type="video/mp4"/>
                    </video>
                </div>
        </section>
        <h1 className="violet-big-margin big-h1">Skontaktuj się!</h1>
        <section className="grid odd">
                <div className="grid-elem-1">
                    <form>
                        <h3>Nazwa</h3>
                        <input type="text" required/>
                        <h3>e-mail</h3>
                        <input type="email" required/>
                        <h3>Treść</h3>
                        <textarea required max-length="1000" name="mess" id="mess" cols="30" rows="10"></textarea><br/>
                        <button className="btn purple-btn">Wyślij</button>
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
                    <h1>ŚWIAT WSPANIAŁYCH OFERT STOI PRZED TOBĄ OTWOREM!</h1>
                    <img src={plus500} alt="500plus"/>
                    <h2>OSZCZĘDZAJ, OTRZYMUJ, PROMUJ</h2>
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
