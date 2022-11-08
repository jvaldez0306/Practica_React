import React, {useState} from 'react';
import './App.css';
import Modal from './Modal'

function App() {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  }
  return (
    <div className="App">
      <button style={{
        position: 'absolute',
        top: '50%',
        padding: 10,
         }}onClick ={toggle}>Open Modal</button>
      <Modal active={active} toggle={toggle}>
      <h1>Modal Funciona!</h1>
      </Modal>
      
    </div>
  );
}

export default App;
