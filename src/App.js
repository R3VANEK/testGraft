import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './components/footer/footer'
import Header from './components/header/header'
import HeaderMobile from './components/headerMobile/headerMobile'
import Home from './components/home/home'
import Account from './components/account/account'
import './app.css'


class App extends Component {

  state = {
    mobileHeader:false
  }

  

  
    render() {
      const header = this.state.mobileHeader ? <HeaderMobile/>  : <Header/>
    return (
      <BrowserRouter>
        <div className="App">
          {header}
          <Route exact path="/" component={Home} />    
          <Route exact path="/test-gitPage" component={Home} />  
          <Route exact path="/account" component={Account} />
          <Footer/>
        </div>
      </BrowserRouter>
    )
}
}

export default App;
