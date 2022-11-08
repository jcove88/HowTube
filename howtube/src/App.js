import {NavBar} from './NavBar';
import {Categories} from './Categories';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import './App.css';

function App() {
  const [ user, setUser ] = useState({});
  function handleCallbackResponse(response) {
    console.log(response.credential);
    var decode = jwt_decode(response.credential);
    console.log(decode);
    setUser(decode);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  
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
        <NavBar/>
        {Object.keys(user).length !== 0 &&
					<button className="Sign-Out-Button" onClick={ (e) => handleSignOut(e)}>Sign Out</button>
				}
        <Categories/>
        <body className="App-header">
        <div className="Video">
          <iframe width="300" height="174" src="https://www.youtube.com/embed/GLVQZ2sXtjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="Description-container">
            <p>
            THE UPSIDE DOWN!!! LEGO Stranger Inosa Things - Set 75810 Time-lapse Build and Review!
            </p>
            <div className="Description-text">
              <p>
              3M views • 4 years ago
              </p>
              <p>
              Brick Builder
              </p>
              <p>
              New Lego 2018 Hogwarts Castle Make the magic come alive at the LEGO® Harry Potter™ 71043 Hogwarts™ Castle! This highly ...
              </p>
            </div>
          </div>
        </div>
        </body>
      </div>
    </div>
  );
}

export default App;
