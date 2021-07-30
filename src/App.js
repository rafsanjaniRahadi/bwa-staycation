import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'assets/scss/style.scss';
import LandingPage from 'pages/LandingPage';
import DetailPage from 'pages/DetailPage';
import Checkout from 'pages/Checkout';
import Example from 'pages/Example';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/properties/:id" component={DetailPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/example" component={Example} />
        </Switch>
      </Router>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
