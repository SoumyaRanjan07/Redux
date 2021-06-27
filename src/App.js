import logo from './logo.svg';
import './App.css';
 
 import Homecontainer from './containers/Homecontainer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      
      {/* <Home  /> */}
      <Homecontainer/>
      </header>
    </div>
  );
}

export default App;
