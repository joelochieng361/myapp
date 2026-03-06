import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Forthcomponent from './components/Forthcomponent';
import Fifthcomponent from './components/Fifthcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to learning react.js</h1>
        <h2>React is fun</h2>
        </header>

        {/* Below we show the firstcomponent */}
        <Firstcomponent />
        <Thirdcomponent />
        <Forthcomponent />
        <Fifthcomponent />

    </div>
  );
}

export default App;
