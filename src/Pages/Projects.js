import React, { Component } from 'react';
import './Style/Projects.css'
import axios from 'axios'

class Projects extends Component {
	constructor(props) {
		super(props);
			this.state = {
				username: 'Goochimagne',
				repos: null
			}
	}

	componentDidMount() {
		axios.get('https://api.github.com/users/Goochimagne/repos')
			.then(response => {
				this.setState({repos: response.data});
			});
	}


	render() {
		if (this.state.repos === null) {
      return (<p>LOADING . . . </p>);
    } else {
			return (<div id='proj'><RepoGrid repos={this.state.repos}/></div>);
		}
  }
}

function RepoGrid(props) {
	console.log(props.repos);
	return (
		<ul className='repo-list'>
			{props.repos.map((repo, i) => {
				return(
					<div className='repo-container'>
					<a href={repo.html_url}>

						<li key={repo.name} className="repo-item">
							<ul className="repo-info">
								<li className="repo-name">{repo.name}</li>
								<li className="repo-link">
								{repo.html_url}
								</li>
								{Fork(repo.fork)}
							</ul>
						</li>
						</a>

					</div>
				)
			})}
		</ul>
	)
}

function Fork(fork) {
	console.log(fork);
	if (fork) {
		return (<li className="fork">Forked</li>);
	} else {
		return (<li className="fork">Original</li>);
	}
}

export default Projects;
