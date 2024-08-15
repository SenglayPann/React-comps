import { useState } from 'react';
import DropDown from './components/dropDown';
import './style/output.css';
function App() {
  const options = [
    {value: 'red', label: 'red'},
    {value: 'green', label: 'green'},
    {value: 'blue', label: 'blue'},
  ];

  const [selection, setSelection] = useState('select...');

  const handleSelection = (value) => {
    setSelection(value);
  }
  return ( 
    <div className=' flex'>
      <DropDown options={ options } value={ selection } onChange={ handleSelection }/>
      <DropDown options={ options } value={ selection } onChange={ handleSelection }/>
    </div>
  )
}

export default App
