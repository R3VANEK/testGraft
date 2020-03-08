import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from './components/footer/footer'
import HeaderDesktop from './components/headerDesktop/headerDesktop'
import HeaderMobile from './components/headerMobile/headerMobile'
import Home from './components/home/home'
import Register from './components/register/register';
import About from './components/about/about';
import ForMedia from './components/forMedia/forMedia';
import Regulations from './components/regulations/regulations';
import Page404 from './components/page404/page404';
import Account from './components/account/account';
import Offers from './components/offers/offers'
//import Contact from './components/about/contact';
import './app.css'


class App extends Component {

  state = {
    mobileHeader:false
  }

  componentDidMount(){
    window.addEventListener('resize', () => {
    if(window.innerWidth < 850 || window.innerHeight < 500){this.setState({mobileHeader:true})}
    else{this.setState({mobileHeader:false})}
    }, true);
    window.addEventListener('load', () => {
    if(window.innerWidth < 850 || window.innerHeight < 500) {
        this.setState({mobileHeader:true})
    } else {
        this.setState({mobileHeader:false})
    }

    });
  }
  

  
    render() {
      const header = this.state.mobileHeader ? <HeaderMobile/>  : <HeaderDesktop/>
      return (
        <BrowserRouter>
          <div className="App">
            {header}

          <Switch>
            <Route path="/rejestracja" component={Register} />
            <Route path="/o-nas" component={About} />
            <Route path="/dla-mediow" component={ForMedia} />
            <Route path="/regulamin" component={Regulations} />
            <Route path="/moje-konto" component={Account} />  
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

