import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import './App.css';
import Canvasimg from './Canvasimg';
import Clash from './Clash';
import Boca from './Boca';
import LogoIntro from './LogoIntro';
import Amigurises from './Amigurises';


function App() {



  return (
    <Router>
    <LogoIntro />
    <div className="App">
    <Navigation />
    <Switch>
        <Route path='/' exact component={Amigurises}/>
        <Route path='/app' component={Clash}/>
        <Route path='/boca' component={Boca}/>

    </Switch>
        <section className='footerSec'>
          <p className='footerp'> Amigurises 2019 - creado por Broeders</p>
        </section>
    </div>
    </Router>
  );
}

export default App;
