import React from 'react';

import {Router, Link} from '@reach/router'
import Main from './views/Main'
import Add from './views/Add'
import './App.css';
import Status from './views/Status'
import Game1 from './components/game1'
import Game2 from './components/game2'
import Game3 from './components/game3'


function App() {
  return (
    <div className="App">
      <h4><Link to="/players/list/">Manage Players</Link></h4>
      <h4> | </h4>
      <h4><Link to="/status/game/">Manage Player Status</Link></h4>
      <Router>
      <Main path="/players/list/" />
      <Add path="/players/addplayer/" />
      <Status path="/status/game/" />
      <Game1 path="/status/game/1/" />
      <Game2 path="/status/game/2/" />
      <Game3 path="/status/game/3/" />
      </Router>
    </div>
  );
}

export default App;
