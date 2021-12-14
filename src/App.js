import mangoooo from './image/mangoooo.png';
import './App.css';
import background from "./image/DSCF0354.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundPosition:  `center`,backgroundColor:`black`, backgroundRepeat: `repeat` , backgroundSize: `cover` , backgroundImage: `url(${background})` }}>
     
      <header className="App-header">
        <img src={mangoooo} className="App-logo" alt="logo" />
        <p>
        Hoàng Minh Hiếu update dev v1.1.2
        </p>
        <a
          className="App-link"
          href="http://mango.viecrew.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mango viecrew
        </a>
      </header>
    </div>
  );
}

export default App;
