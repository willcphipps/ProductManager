import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Router, Link} from "@reach/router";
import axios from "axios";
import Form from './components/Form';


function App() {
  const [active, setActive] = useState("/")
  return (
    <div className="App">
      <div className="flex-column">
        <ul className="nav nav-tabs mb-5">
        <li className="nav-item" onClick={e => setActive("/")} >
          <Link className={ active === "/" ? "nav-link active" : "nav-link" } to="/">Home</Link>
        </li>
        <li className="nav-item" onClick={e => setActive("/new")}>
          <Link className={ active === "/new" ? "nav-link active" : "nav-link" } to="/new">New Product</Link>
        </li>
      </ul>
        <Router>

         <Form path="/new" />
        </Router>
      </div>
    </div>
  );
}

export default App;
