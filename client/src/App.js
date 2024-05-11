// src/App.js
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Home';
import AddCar from './AddCar';

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>
              Добре дошли в нашето приложение за добавяне на коли!
            </p>
            <Link to="/home">
              <button>Начална страница</button>
            </Link>
            <Link to="/add-car">
              <button>Добави кола</button>
            </Link>
            <Routes>
              <Route path="/add-car" element={<AddCar/>} />
              <Route path="/home" element={<Home/>} />
            </Routes>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Router>
  );
}

export default App;