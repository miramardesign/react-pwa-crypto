import './App.css';

import React from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CoinDetailComponent from './pages/CoinDetailComponent';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/details/">coin details.</Link>
                </li>
              </ul>
            </nav> */}
            <Route path="/" exact component={HomePage} />
            <Route path="/details/:id" component={CoinDetailComponent} />
          </div>
        </Router>
    </div>
  );
}

export default App;
