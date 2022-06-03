import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [number, setNumber] = useState(0);
  
  const ubah = () => {
    setNumber(number+1);
    if(number === 33){
      setNumber(1);
    }
  }

  const reset = () => {
    setNumber(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='logo' className="App-logo" />
        <div className='container'>
          <h3>Hai, Lerian Febriana</h3>
          <h5 className='counter'>{number}</h5>
        </div>
        <div>
          <button type='button' className='button action' onClick={ubah}>click here!</button>
          <button type='button' className='button reset' onClick={reset}>reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
