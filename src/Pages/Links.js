import React, { Component } from 'react';

import './Style/Links.css'

import fb from '../resources/fb.png'
import git from '../resources/git.png'
import linkedin from '../resources/linkedin.png'
import hr from '../resources/hackerrank.png'

class Links extends Component {
  render() {
    return (
			<div id="links">
				<div className="link-container">
					<a href="https://github.com/Goochimagne" >
					<img className="icon" id="git" src={git} ></img>
					<span className='src'>https://github.com/Goochimagne</span>
					</a>
				</div>
				<div className="link-container">
					<a href="https://www.facebook.com/Goochimagne" >
					<img className="icon" id="fb" src={fb} ></img>
					<span className='src'>https://www.facebook.com/Goochimagne</span>
					</a>
				</div>
				<div className="link-container">
					<a href="www.linkedin.com/in/nbgooch" >
					<img className="icon" id="linked" src={linkedin} ></img>
					<span className='src'>www.linkedin.com/in/nbgooch</span>
					</a>
				</div>
				<div className="link-container">
					<a href="https://www.hackerrank.com/Goochimagne" >
					<img className="icon" id="hr" src={hr} ></img>
					<span className='src'>https://www.hackerrank.com/Goochimagne</span>
					</a>
				</div>
			</div>
    );
  }
}

export default Links;
