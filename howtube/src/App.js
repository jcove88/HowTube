import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="top-bar">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="search-bar">
          <input type="text" placeholder="Search.." className="search"/>
          <button className='submit'><i class="fa-regular fa-magnifying-glass"></i></button>
        </form>
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
