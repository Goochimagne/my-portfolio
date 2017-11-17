import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import './index.css';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Home from './Pages/Home.js';
import Links from './Pages/Links.js';
import Projects from './Pages/Projects.js';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
	<Router>
    <div >
			<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      	<NavLink className="navbar-brand" to="/">Nick Gooch</NavLink>
      	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      	</button>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
          </li>
					<li className="nav-item">
            <NavLink className="nav-link" to="/links">Links</NavLink>
          </li>
					<li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact Me</NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" ></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    	</nav>


      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/links" component={Links}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>, document.getElementById('root'));

registerServiceWorker();

// <div className="render">
// 	<nav className="navbar">
// 		<ul className="navbar">
// 		<li className="nav-item nav-brand"><NavLink to="/">Nick Gooch</NavLink></li>
// 		<li className="nav-item"><NavLink to="/about">About</NavLink></li>
// 		<li className="nav-item"><NavLink to="/projects">Projects</NavLink></li>
// 		<li className="nav-item"><NavLink to="/NavLinks">NavLinks</NavLink></li>
// 		<li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
// 		</ul>
// 	</nav>
