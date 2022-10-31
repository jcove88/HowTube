import React from 'react';
import searchIcon from './images/SearchIcon.png';
import logo from './images/Logo.png';


const NavBarStyle = {
	'background-color': 'rgb(59,59,59)',
	'height': '100px',
	'width': 'auto',
}

const LogoStyle = {
	'position':'absolute',
	'top': '0px',
	'left': '0px',
	'text-align': 'left',
	'height': '100px',
	'display': 'inline-block',
}

const InputStyle = {
	'height': '10px',
	'width': '300px',
	'margin-top': '35px',
	'margin-bottom': '35px',
	'padding': '10px',
	'text-align':'center',
}

const SearchButtonStyle = {
	'position': 'absolute',	
	'margin-top': '35px',
	'margin-bottom': '35px',
	'height': '34px',
	'width':'100px',
}

const SearchIconStyle = {
	'position': 'relative',
	'height': '30px'
}

const SignInButtonStyle = {
	'position': 'absolute',
	'top':'23px',
	'right':'0px',
	'height':'75px',
	'margin-top':'12px',
	'margin-right':'12px',
}

export class NavBar extends React.Component {
	render(user, handleSignOut) {
		return (
			<div style={NavBarStyle}>
				<div style={LogoStyle}>
					<img src={logo} alt='HowTube' style={LogoStyle}/>
				</div>
				<input style={InputStyle}></input>
				<button style={SearchButtonStyle}>
					<img src={searchIcon} alt='search' style={SearchIconStyle}/>
				</button>
				<div id="signInDiv" style={SignInButtonStyle}></div>
				
			</div>
		);
	}
}
