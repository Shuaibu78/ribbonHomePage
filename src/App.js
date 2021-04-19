import React from 'react';
import Navbar from './components/navbar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Activity from './pages/activity';
import Wallet from './pages/wallet';
import Market from './pages/market';
import Earn from './pages/earnings';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/activity' component={Activity} />
        <Route path='/wallet' component={Wallet} />
        <Route path='/market' component={Market} />
        <Route path='/earn' component={Earn} />
      </Switch>
    </Router>
  );
}

export default App;