import logo from './logo.svg';
import './App.css';

function App() {
  const onClick = () => {
    import('./19-code-spliting/notify').then((result) => result.default());
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
