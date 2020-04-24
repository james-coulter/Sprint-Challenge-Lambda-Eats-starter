import React from 'react'
import {Route, Link} from "react-router-dom"
import Home from './Home'
import Form from './Form'

const App = () => {
  return (
    <div>

      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
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
