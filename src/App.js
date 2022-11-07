import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode]=useState('light');
  const [alert, setalert]=useState(null);
  const showalert=(message,type)=>
  {
    setalert({
      msg:message,
      type:type
    })
  }

  const toggleMode=()=>
  {
    if(mode==='light')
    { setmode('dark')
     
    document.body.style.backgroundColor="#0a4178";
    showalert("dark mode has been enabled","success")
  }
    else 
     {
     setmode('light')
     document.body.style.backgroundColor="white";
     showalert("light mode has been enabled","success")
     }
  }
  return (
  <> 
  
  <Navbar mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
   <div className="container my-3" style={{color: mode==='dark'?'white':'black'}}>
   <h1> Enter the text to analyse</h1> 
   {/* <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm mode={mode}/>
          </Route>
   </Routes> */}
   {/* <Routes> */}
    {/* /users --> Component 1
        /users/home --> Component 2 */}
        {/* <Routes>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showalert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
        </Routes>

 
 </Router> */}
  {/* <About/>  */}
  </div> 
  <TextForm showAlert={showalert} mode={mode}/>
    </> 
  );
}

export default App;
