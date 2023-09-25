import logo from './logo.svg';
import './App.css';
import { ShoeButton } from './components/ShoeButton';
import { Doorbell } from './components/Doorbell';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShoeButton />
        <Doorbell />
      </header>
    </div>
  );
}

export default App;
