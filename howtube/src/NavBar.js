import React from 'react';
import searchIcon from './images/SearchIcon.png';
import logo from './images/Logo.png';
import { ytSearchBar } from './Search';


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

const SignedInDivStyle = {
	'position': 'absolute',
	'top':'0px',
	'right':'0px',
	'margin-top':'15px',
	'margin-right':'225px',
}

const ProfilePicStyle = {
	'width':'75px'
}

export class NavBar extends React.Component {
	render() {
		return (
			<div style={NavBarStyle}>
				<div style={LogoStyle}>
					<img src={logo} alt='HowTube' style={LogoStyle}/>
				</div>
				<input style={InputStyle} id="searchBar"></input>
				<button style={SearchButtonStyle} onClick={() => ytSearchBar()}>
					<img src={searchIcon} alt='search' style={SearchIconStyle}/>
				</button>
				<div id="signInDiv" style={SignInButtonStyle}></div>
				<div id="signedInDiv" style={SignedInDivStyle}>
					<img src={this.props.picture} alt="" style={ProfilePicStyle}></img>
				</div>
			</div>
		);
	}
}
