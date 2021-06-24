import axios from 'axios';
import { useState } from 'react';
import { findDOMNode } from 'react-dom';
import './App.css';

function App() {
  const [file,setFile]=useState(null)
  const fileSelectedHandler=(e)=>{
    
    setFile(e.target.files[0])
  }
  const upload=()=>{
    const fd= new FormData()
    fd.append('image',file,file.name);
 axios.post('url',fd)
 .then(res=> res)
 .catch(err=>console.log(err))

  }
  return (
    <div className="App">
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={upload} >Upload</button>
    </div>
  );
}

export default App;
