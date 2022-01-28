import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Footer from "./Footer";

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }else{
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  },[]);

  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route exact path = "/">
            <Header/>
            <Home/>
            <Footer/>
          </Route>

          <Route exact path = "/payment">
            <Header/>
            <Payment/>
            <Footer/>
          </Route>

          <Route path = "/checkout">
            <Header/>
            <Checkout/>
            <Footer/>
          </Route>

          <Route path = "/login">
            <Login/>
          </Route>

        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
