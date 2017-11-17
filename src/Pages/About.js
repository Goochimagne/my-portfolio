import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap'
import './About.css'

class About extends Component {

  render() {
		const python = 80;
		const java = 90;
		const js = 75;
		const php = 30;
		const html = 90;
		const css = 75;
		const matlab = 40;
		const r = 10;
		const ruby = 5;
		const c = 65;
		const cplus = 65;
		const csharp = 25;
		const assembly = 50;
		const batch = 25;
		const sql = 80;
		const perl = 10;
		const ts = 30;

    return (
			<div className="about">
				<div className="article">
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					</p>
				</div>
				<div className="proficiency">
					<div className="bars">
					<div className="bar-title"> Java: </div>
					<ProgressBar className='pg-bar' now={java} label={`${java}%`}/>

					<div className="bar-title"> Python: </div>
					<ProgressBar className='pg-bar' now={python} label={`${python}%`}/>

					<div className="bar-title"> C: </div>
					<ProgressBar className='pg-bar' now={c} label={`${c}%`}/>

					<div className="bar-title"> C++: </div>
					<ProgressBar className='pg-bar' now={cplus} label={`${cplus}%`}/>

					<div className="bar-title"> C#: </div>
					<ProgressBar className='pg-bar' now={csharp} label={`${csharp}%`}/>


					<div className="bar-title"> Java: </div>
					<ProgressBar className='pg-bar' now={sql} label={`${sql}%`}/>


					<div className="bar-title"> HTML: </div>
					<ProgressBar className='pg-bar' now={html} label={`${html}%`}/>
					<div className="bar-title"> JS: </div>
					<ProgressBar className='pg-bar' now={js} label={`${js}%`}/>
					<div className="bar-title"> CSS: </div>
					<ProgressBar className='pg-bar' now={css} label={`${css}%`}/>
					<div className="bar-title"> PHP: </div>
					<ProgressBar className='pg-bar' now={php} label={`${php}%`}/>
					<div className="bar-title"> TS: </div>
					<ProgressBar className='pg-bar' now={ts} label={`${ts}%`}/>

					<div className="bar-title"> Ruby: </div>
					<ProgressBar className='pg-bar' now={ruby} label={`${ruby}%`}/>
					<div className="bar-title"> Perl: </div>
					<ProgressBar className='pg-bar' now={perl} label={`${perl}%`}/>

					<div className="bar-title"> Matlab: </div>
					<ProgressBar className='pg-bar' now={matlab} label={`${matlab}%`}/>
					<div className="bar-title"> R: </div>
					<ProgressBar className='pg-bar' now={r} label={`${r}%`}/>

					<div className="bar-title"> ASM: </div>
					<ProgressBar className='pg-bar' now={assembly} label={`${assembly}%`}/>
					</div>
				</div>
			</div>
    );
  }
}

export default About;
