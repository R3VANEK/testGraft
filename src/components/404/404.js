import React from 'react'
import bla from '../../images/404.svg'
import './404.css'

const Site404 = (props)=>{
    return(
        <div className="main-404">
            <br/>
            <br/>

            <div class="tekst1">
                <h2>404 - Nie znaleziono takiej strony!</h2>
            </div>

            <div class="tekst2">
                <h3>Sprawdź czy poprawnie wpisałaś/łeś adres URL i spróbuj ponownie lub wróć na stronę główną.</h3>
            </div>

            <div class="logo2137">
                <img src={bla} alt="Screen"/>
            </div>

            <br/>

            <div class="tekst1">
                <h1>Ups</h1>
            </div>


            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Site404