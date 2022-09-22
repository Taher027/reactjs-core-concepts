import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <DisplaySomething name="taher" address="barishal"></DisplaySomething>
      <DisplaySomething name="rohim" address="dhaka"></DisplaySomething>
      <DisplaySomething name="karim" address="kishorgang"></DisplaySomething>
    </div>
  );
}


const DisplayStyle = {
  backgroundColor: 'gray',
  margin: '30px',
  padding: '20px',
  borderRadius: '15px'
}
function DisplaySomething(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    <div style={DisplayStyle}>
      <p>Name: {props.name}</p>
      <p>Addresss: {props.address}</p>
      <h4>Power:{power} </h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
