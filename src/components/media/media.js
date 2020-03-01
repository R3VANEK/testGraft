import React from 'react'
import socialImg from '../../images/social.svg'
import mediaImg from '../../images/media.svg'

const Media = (props) =>{
    return(
        <div className="main-Media">
            <br/>
            <br/>

            <div class="tekst1">
                <h1>Dla Mediów</h1>
            </div>

            <div class="tekst2">
                <h3>
                    Prowadzisz bloga, stronę lub jesteś dziennikarzem? Skorzystaj z
                    naszych grafik promocyjnych wysokiej jakości.
                </h3>
            </div>

            <div class="logo2137">
                <img src={mediaImg} alt="Screen"/>
            </div>

            <a download href="dla-mediow.zip"><h1 class="with-icon"><i class="fas fa-file-archive"></i>&nbspPobierz paczkę zip z materiałami</h1></a>

            <br/>
            <br/>
            <br/>
            <br/>


            <section class="grid purples">
                <br/>

                <div class="logo2138">
                    <img src={socialImg} alt="Screen"/>
                </div>

                <div class="grid-elem-1">
                    <h1> Pozostańmy w kontakcie!</h1>
                    <h3>Aby być zawsze na bieząco z serwisem<br/>Śledź nas na Social Media.</h3>
                    <h1><a href="https://www.facebook.com/Co-Za-500-Plus-111069843646022/"><i class="fab fa-facebook"></i>&nbspFacebook.com/coza500plus</a></h1>
                    <h1><a href="https://www.instagram.com/coza500plus/?hl=pl"><i class="fab fa-instagram"></i>&nbspInstagram.com/coza500plus</a></h1>
                    <br/>
                </div>
            </section>

        </div>
    )
}

export default Media