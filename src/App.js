import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Different cuisine</h1>
      <Router> 
      <Navbar />
      </Router>
    </div>
  );
}

export default App;
