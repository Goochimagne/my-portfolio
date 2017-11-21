import React, { Component } from 'react';
import unc from '../../resources/unc.png'


class Header extends Component {
	render (){
		return (
			<div className="header-img">
				<img id='unc' src={unc}  alt="unc"/>
			</div>
		);
	}
}

export default Header;
