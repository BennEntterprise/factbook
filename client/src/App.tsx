import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(()=>{
    axios.get('http://localhost:5000/api/testapi')
      .then((res:any) => console.log(res))
      .catch((err:any) => console.error(err))
  },[])

  return (
    <div className="App">
      <header className="App-header">
    <h1>
      
      Factbook
      </h1>
    <p>
      Here We go
    </p>
      </header>
    </div>
  );
}

export default App;
