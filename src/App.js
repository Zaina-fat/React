
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>  
    
  <Navbar/>
   <div className='container my-3'>
  <h1>Enter the text to analyse</h1>
  <TextForm/>
  </div> 
  {/* <About/> */}
    </> 
  );
}

export default App;
