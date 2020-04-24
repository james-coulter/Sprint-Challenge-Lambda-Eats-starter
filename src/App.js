import React from 'react'
import {Route, Link} from "react-router-dom"
import Home from './Home'
import Form from './Form'

const App = () => {
  return (
    <div>

      <div className="links">
        <h2 className="heading">Lambda Eats: Pizzeria</h2>
        <Link className="homeLink" to='/'>Home</Link>
        <Link className="homeLink" to='/pizza'>Order</Link>
      </div>

      <Route exact path="/">
      <Home />
      </Route>

      <Route path="/pizza">
      <Form />
      </Route>
    </div>
  );
};
export default App;
