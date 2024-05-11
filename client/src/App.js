// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarList from './CarList';
import CarDetails from './CarDetails';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/cars/:id">
            <CarDetails />
          </Route>
          <Route path="/">
            <CarList />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;