import logo from './logo.svg';
import './App.css';
import Calculator from'./Calculator.js';

function App() {
  return (
    <div>
      <Calculator number={1}/>
      <Calculator number={10}/>
    </div>
  );
}

export default App;
