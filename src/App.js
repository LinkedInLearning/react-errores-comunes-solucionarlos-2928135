import logo from './logo.svg';
import './App.css';
import { LINKS } from './helpers/constants';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{LINKS}</div>
        <Menu />
      </header>
    </div>
  );
}

export default App;
