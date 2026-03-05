import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to learning react.js</h1>
        <h2>React is fun</h2>

        {/* Below we show the firstcomponent */}
        <Firstcomponent />
      </header>
    </div>
  );
}

export default App;
