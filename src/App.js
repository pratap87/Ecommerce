import React ,{Component}from 'react';
 
import {BrowserRouter, Route, Switch} from 'react-router-dom';
 
import './App.css';
 
import Header from './components/Header'
 



 
import Home from './components/Home'
import Cart from './components/cart'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
             <>
             <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
              </>
       </BrowserRouter>
      
    );
  }
}

export default App;
