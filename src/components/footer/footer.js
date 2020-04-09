import React from 'react'
import './footer.css'
import fb from '../../images/facebook.svg';

function Footer() {
    return (
        <footer>
        <div class="footer-inner-1st">
            <div class="footer-inner-1st-column">
                <h3>Section 1</h3>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 2</a>
                <div class="footer-icons">
                    <img src={fb} alt="fb" />
                    <img src={fb} alt="fb" />
                    <img src={fb} alt="fb" />
                </div>               
            </div>
            <div class="footer-inner-1st-column">
                <h3>Section 2</h3>
                <a href="#"> Link 2</a>
                <a href="#" > Link 2 Link 2 </a>
                <a href="#"> Link 2 Link 2</a>
                <a href="#"> Link 2</a>         
            </div>
            <div class="footer-inner-1st-column">
                <h3>Section 3</h3>
                <a href="#" >Link 2 Link 2 </a>
                <a href="#"> Link 2 Link 2 </a>
                <a href="#"> Link 2 </a>
                <a href="#"> Link 2 </a>
            </div>
        </div>

        <div class="footer-inner-break-line">

        </div>
        <div class="footer-inner-2nd">
            <div class="footer-inner-2nd-1st">
                Ⓒ 500plus blah blah blah blah.
            </div>
            <div class="footer-inner-2nd-2nd">
                Lorem ipsum dolor sit amet
            </div>
        </div>
    </footer>
    );
  }
  
  export default Footer;