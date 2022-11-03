import React, {useState} from 'react'

export default function TextForm()
{
    const handleupClick=()=>
    {
        console.log("button was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handledownClick=()=>
    {
      console.log("button was clicked");
        let newText=text.toLowerCase();
        setText(newText);
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
      <div className="container">       
      <div className="mb-3"> 
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} rows="8" />
        </div>
        <button className="btn btn-primary" onClick={handleupClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handledownClick}>Convert to lowercase</button>
        <button className="btn btn-primary" onClick={clrtxt}>Clear text</button>

        </div>
        <div className='container my-3'>
        <h1>summary of the paragraph</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>
         PREVIEW
        </h2>
        {text}
        </div>
        </> 


   )
}   