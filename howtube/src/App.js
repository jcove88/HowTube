import logo from './logo.svg';
import {NavBar} from './NavBar';
import {Categories} from './Categories';
import './App.css';

function App() {
  return (
    <div className="App">
	  <NavBar/>
    <Categories/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with HowTube
        </a>
      </header>
    </div>
  );
}

export default App;
