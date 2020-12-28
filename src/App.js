import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Landing from './components/Landing';
import Navigation from './components/Navigation';
import Wake from './components/Wake';
import LifeIsGood from './components/LifeIsGood';
import Surf from './components/Surf';
import NY1 from './components/NY1';
import WildestDreams from './components/WildestDreams';
import TwilightZone from './components/TwilightZone';
import Dawn from './components/Dawn';
import Waves from './components/Waves';

function App() {
  return (
    <Router>
      <div className="App">
            <Navigation/>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}  
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}   
                className="switch-wrapper"   
            >
              <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/wake-up" component={Wake}/>
                <Route path="/life-is-good" component={LifeIsGood}/>
                <Route path="/surf" component={Surf}/>
                <Route path="/waves" component={Waves}/>
                <Route path="/ny1-new-york-minute-pt2" component={NY1}/>
                <Route path="/wildest-dreams" component={WildestDreams}/>
                <Route path="/twilight-zone" component={TwilightZone}/>
                <Route path="/dawn" component={Dawn}/>
              </Switch>
            </AnimatedSwitch>
      </div>
    </Router>
  );
}

export default App;
