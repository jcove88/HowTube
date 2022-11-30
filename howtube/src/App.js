import {NavBar} from './NavBar';
import {Categories} from './Categories';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import './App.css';
import { WelcomePage } from './WelcomePage';

function App() {
  const [ user, setUser ] = useState({});
  function handleCallbackResponse(response) {
    console.log(response.credential);
    var decode = jwt_decode(response.credential);
    console.log(decode);
    setUser(decode);
    document.getElementById("signInDiv").hidden = true;
    document.getElementById("signedInDiv").hidden = false;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    document.getElementById("signedInDiv").hidden = true;
  }

  useEffect(() => {
    const keyDownHandler = event => {
		  if (event.key === 'Enter') {
			  event.preventDefault();
			  document.getElementById("searchButton").click();
		  }
	  }
	  document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);
  
  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id : "1005992755384-qo3qlur4eed9eaep9aqr0q3chltq38kn.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: 'outline', size: 'large' }
    );
  },[]);

  return (
    <div className="App">
      <div className="Flex-container">
        <NavBar picture = {user.picture}/>
        {Object.keys(user).length !== 0 &&
          <div>
            <button className="Sign-Out-Button" onClick={ (e) => handleSignOut(e)}>Sign Out</button>
          </div>
				}
        <Categories/>
        <body id="body">
          <WelcomePage/>
        </body>
      </div>
    </div>
  );
}


export default App;
