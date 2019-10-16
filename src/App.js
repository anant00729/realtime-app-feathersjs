import React from 'react';
import './App.css';
import Home from './components/Home';
import { HashRouter as Router, Route , Switch } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

  

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Home}/>
        </Router>
      </Provider>
  );
}

export default App;
