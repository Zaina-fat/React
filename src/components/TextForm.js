import { color } from '@mui/system';
import React, {useState} from 'react'

export default function TextForm(props)
{
    const handleupClick=()=>
    {
        console.log("button was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("text converted to uppercase","success")

    }
    const handledownClick=()=>
    {
        console.log("button was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("text converted to lowercase","success")
    }
    const clrtxt=()=>
    {
      setText("");
    }
    const handleOnchange=(event)=>
    {
       setText(event.target.value)
    }
    const[text,setText]=useState("");
    return(      
       <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
      
      <div className="mb-3"> 
  
        <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnchange} rows="8" />
        </div>
        <button className="btn btn-primary my-1" onClick={handleupClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handledownClick}>Convert to lowercase</button>
        <button className="btn btn-primary my-1" onClick={clrtxt}>Clear text</button>

        </div>
        <div className='container my-3'>
        <h1>Summary of the paragraph</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h2>
         PREVIEW
        </h2>
        {text}
        </div>
        </> 


   )
}   