import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  NavLink, Switch
} from 'react-router-dom'
import './Pages/Style/index.css';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Home from './Pages/Home.js';
import Links from './Pages/Links.js';
import Projects from './Pages/Projects.js';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
	<Router>
    <div >
			<nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top">
      	<p className="navbar-brand">Nick Gooch</p>
      	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      	</button>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact activeClassName='active' className="nav-link" to="/">Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName='active' className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink
						activeClassName='active' className="nav-link" to="/projects">Projects</NavLink>
          </li>
					<li className="nav-item">
            <NavLink activeClassName='active' className="nav-link" to="/links">Links</NavLink>
          </li>
					<li className="nav-item">
            <NavLink activeClassName='active' className="nav-link" to="/contact">Contact Me</NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" ></input>
          <button className="btn btn-outline-success my-3 my-md-0" type="submit">Search</button>
        </form>
    	</nav>

			<Switch>
      <Route exact path="/" component={Home}/>
			</Switch>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/links" component={Links}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>, document.getElementById('root'));

registerServiceWorker();
