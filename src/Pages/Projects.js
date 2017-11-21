import React, { Component } from 'react';

import './Style/Projects.css'
import axios from 'axios'

function RepoGrid(props) {
	return (
			<ul className='repo-list'>
				{props.repos.map(function(repo) {
					<li key={repo.name} className="repo-item">
						<ul className="repo-info">
							<li clssName="repo-name">{repo.name}</li>
							<li clssName="repo-link">
								<a href={repo.html_url}>
								{repo.html_url}
								</a>
							</li>
							<li clssName="repo-name">{}</li>
						</ul>
					</li>
				})}
			</ul>
	)
}

class Projects extends Component {
	constructor() {
		super();
			this.state = {
				username: 'Goochimagne',
				repos: null
			}
	}

	componentDidMount() {
		let self = this
		axios.get('https://api.github.com/users/' + this.state.username + '/repos').then((response) => {
			console.log(response.data);
			self.setState(function() {
				repos: response.data
			});
		});
	}


	render() {
    if (this.state.repos !== null) {
      return (<RepoGrid repo={this.state.repos}/>);
    }

    return this.state.repos;
  }
}

export default Projects;
