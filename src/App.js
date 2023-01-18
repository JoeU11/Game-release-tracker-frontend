import './App.css';
import Navbar from "./components/navbar.js"
import GamesIndex from "./components/gamesIndex.js"
import GamesPost from './components/gamesPost.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <GamesPost />
      <GamesIndex />
    </div>
  );
}

export default App;
