
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About'; 
import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom";

function App() { 
  const[mode, setMode]= useState('light');
  const[alert, setAlert]= useState(null);
  const showAlert =  (message,type)=>
  {
    setAlert({msg:message,
      type:type
    })
    setTimeout(()=>
    {
      setAlert(null);
    },1500)
  }
  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled","success")
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("light mode has been enabled","success")
    }
  }
  return (
    <div>
      <Router>
      <Navbar title="shishir" mode={mode} toggleMode={toggleMode}/>
      <strong><Alert alert={alert}/></strong>
      <div className="container mb-3">
        <Routes>
              <Route exact path="/about" element={<About />}>
              </Route>
              <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
              </Route>
        </Routes> 
        {/* <About/> */}
      </div>
      </Router>
    </div>
  );
}

export default App;
