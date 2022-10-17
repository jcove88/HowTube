import {NavBar} from './NavBar';
import {Categories} from './Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Flex-container">
        <NavBar/>
        <Categories/>
        <body className="App-header">
        <div className="Video">
          <iframe width="300" height="174" src="https://www.youtube.com/embed/GLVQZ2sXtjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="Description-container">
            <p>
            THE UPSIDE DOWN!!! LEGO Stranger Things - Set 75810 Time-lapse Build and Review!
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
