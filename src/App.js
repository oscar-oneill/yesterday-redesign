import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Landing from './routes/Landing';
import Navigation from './components/Navigation';
import Wake from './routes/Wake';
import LifeIsGood from './routes/LifeIsGood';
import Surf from './routes/Surf';
import NY1 from './routes/NY1';
import WildestDreams from './routes/WildestDreams';
import TwilightZone from './routes/TwilightZone';
import Dawn from './routes/Dawn';
import Waves from './routes/Waves';

function App() {
  return (
    <Router>
      <div className="App">
            <Navigation/>
            <AnimatedSwitch
                atEnter={{ opacity: 1 }}  
                atLeave={{ opacity: 1 }}
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
