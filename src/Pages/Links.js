import React, { Component } from 'react';

import './Style/Links.css'

import fb from '../resources/fb.png'
import git from '../resources/git.png'
import linkedin from '../resources/linkedin.png'
import hr from '../resources/hackerrank.png'

function LinkBox(props) {
	return (<a href={props.href}>
		<img className="icon" src={props.src} alt="404"></img>
		<span className='src'>{props.href}</span>
		</a>)
}

class Links extends Component {
	constructor() {
		super();
	}
  render() {
    return (
			<div id="links">
				<div className="link-container">
					<LinkBox href={"https://github.com/Goochimagne"} src={git} />
				</div>
				<div className="link-container">
					<LinkBox href={"https://www.facebook.com/Goochimagne"} src={fb} />
				</div>
				<div className="link-container">
					<LinkBox href="www.linkedin.com/in/nbgooch" src={linkedin} />
				</div>
				<div className="link-container">
					<LinkBox href="https://www.hackerrank.com/Goochimagne" src={hr} />
				</div>
			</div>
    );
  }
}

export default Links;
