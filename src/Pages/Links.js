import React, { Component } from 'react';

import './Style/Links.css'

import fb from '../resources/fb.png'
import git from '../resources/git.png'
import linkedin from '../resources/linkedin.png'
import hr from '../resources/hackerrank.png'

class Links extends Component {
  render() {
    return (
			<div className="links">
			<div className="link-container">
			<img className="icon" id="git" src={git} ></img>
			</div>
			<div className="link-container">
			<img className="icon" id="fb" src={fb} ></img>
			</div>
			<div className="link-container">
			<img className="icon" id="linked" src={linkedin} ></img>
			</div>
			<div className="link-container">
			<img className="icon" id="hr" src={hr} ></img>
			</div>

			</div>
    );
  }
}

export default Links;
