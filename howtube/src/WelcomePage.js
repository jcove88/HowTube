import React from 'react';
import welcomeText from './images/welcomeImage.png'
import searchIcon from './images/SearchIcon.png';

const WelcomeContainer = {
  'display': 'flex',
}

const Welcome = { 
    'margin-top': '50px',
    'margin-bottom': '50px',
}

const WelcomeTextImage = {
    'display': 'flex',
    'align-self': 'flex-start',
    'height': '660px',
    'width': '825',
}

const InstructionsContainer = {
    'display': 'flex',
    'flex-direction': 'column',
    'margin-top': '240px',
    'margin-left': '130px',
}

const Instructions = {
    'display': 'flex',
    'justify-content': 'right',
    'margin-top': '30px',
    'margin-bottom': '30px',
    'font-size': '30px',
    'font-family':'Verdana, Geneva, Tahoma, sans-serif',
    'color': '#cfe1fc',
}

const SearchButton = {
    'position': 'relative',	
    'height': '34px',
    'width': '100px',
    'margin-left': '20px',
    'margin-right': '25px',
    'margin-top': '8px',
}

const SearchIcon = {
	'position': 'relative',
	'height': '30px',
}

const p = { 
  'color': '#cfe1fc',
  'font-size': '30px',
  'display': 'flex',
  'justify-content': 'left',
  'margin-right': '25px',
}

const CategoryButton = {
    'background-color': 'rgb(217,217,217)',
    'border-radius': '12px',
    'width': '150px',
    'margin-left': '150px',
    'margin-top': '16px',
    'margin-bottom': '350px',
}

export class WelcomePage extends React.Component {
	render() {
		return (
            <div style={WelcomeContainer}>
                <div style={Welcome}>
                    <img src={welcomeText} alt='welcome' style={WelcomeTextImage}/>
                </div>
                <div style={InstructionsContainer}>
                    <div style={Instructions}>
                        <p style={p}>Search for specific interests</p>
                        <button style={SearchButton}>
                            <img src={searchIcon} alt='search' style={SearchIcon}/>
                        </button>
                    </div>
                    <p style={p}>or</p> 
                    <div style={Instructions}>
                        <p style={p}>Select a category</p>
                        <button style={CategoryButton}>
                            CATEGORY
                        </button>
                    </div>
                </div>
            </div> 
		);
        
	}
}
