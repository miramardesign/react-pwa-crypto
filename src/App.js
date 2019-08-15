import React from "react";
import "./App.css";
import HomeComponent from "./HomeComponent";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CoinDetailComponent from "./CoinDetailComponent/CoinDetailComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/details/">coin details.</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={HomeComponent} />
            <Route path="/details/:id" component={CoinDetailComponent} />
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
