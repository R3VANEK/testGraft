import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './components/footer/footer'
import Nav from './components/nav/nav';
import Home from './components/home/home'
import Register from './components/register/register';
import About from './components/about/about';
import ForMedia from './components/forMedia/forMedia';
import Regulations from './components/regulations/regulations';
import Page404 from './components/page404/page404';
import Account from './components/account/account';
import Offers from './components/offers/offers'
import Offer_details from './components/offers/offer_details'
//import Contact from './components/about/contact';
import './app.css'


class App extends Component {
 
    render() {
      return (
        <BrowserRouter>
          <div className="App">
            
            <Route path="/" component={Nav} />

          <Switch>
            <Route path="/rejestracja" component={Register} />
            <Route path="/o-nas" component={About} />
            <Route path="/dla-mediow" component={ForMedia} />
            <Route path="/regulamin" component={Regulations} />
            <Route path="/moje-konto" component={Account} />  
            <Route path="/oferty/:id" render={(props)=> <Offer_details id={props.match.params.id}/>}/>
            <Route path="/oferty" component={Offers} />
            <Route exact path="/" component={Home} />  
            <Route  component={Page404} />
          </Switch>
            
            
            <Footer/>
          </div>
        </BrowserRouter>
    )
}
}

export default App;

