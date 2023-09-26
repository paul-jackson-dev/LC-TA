import logo from './logo.svg';
import './App.css';
import { ShoeButton } from './components/ShoeButton';
import { Doorbell } from './components/Doorbell';
import { ReportForm } from './components/Report';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShoeButton />
        <Doorbell />
        <ReportForm />
      </header>
    </div>
  );
}

export default App;
