import React, { Component } from 'react';
import './style/Article.css'


class Article extends Component {

	render() {
		return (
				<div className="article">
				<iframe width={this.props.width} height={this.props.height} src={this.props.link} frameborder="0" gesture="media" allowfullscreen></iframe>
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					</p>
				</div>
		);
	}
}

export default Article;
