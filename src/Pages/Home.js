import React, { Component } from 'react';

import profile from '../resources/profile.jpg'

import Article from './components/Article.js'
import Header from './components/Header.js'

import './Style/Home.css'


class Home extends Component {
  render() {
    return (
			<div className="home">
				<Header />
				<div className="row">
					<div className="img-div">
						<img id="profile-pic" src={profile} />
						<span id='name'>Nicholas Braxton Gooch</span>
						<span id='email'>e-mail: <a id='gmail' href='./contact'>
						nbgooch@gmail.com
						</a></span>

					</div>
						<div className="short-bio">
							<span id="short-bio-head">A little about me..</span>
							<p>
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							</p>
							<span id="short-bio-foot"><a href='./about'>
							Learn more!</a>
							</span>
						</div>
				</div>
				<div className="row">
					<div id='schedule'>
					</div>
					<Article link={"https://www.youtube.com/embed/MhkGQAoc7bc"}/>
				</div>
				<div className="row">

				<Article link={"https://www.youtube.com/embed/GY7Ps8fqGdc"}/>
				</div>
				<div className="row">

				<Article link={"https://www.youtube.com/embed/VdyORTskPGA"}/>
				</div>
			</div>
    );
  }
}

export default Home;
