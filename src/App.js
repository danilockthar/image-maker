import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import './App.css';
import Canvasimg from './Canvasimg';
import Clash from './Clash';
import Boca from './Boca';
import LogoIntro from './LogoIntro';


function App() {



  return (
    <Router>
    
    <div className="App">
    <Navigation />
    <Switch>
        <Route path='/' exact component={Clash}/>

        <Route path='/boca' component={Boca}/>
    </Switch>

    </div>
    </Router>
  );
}

export default App;
