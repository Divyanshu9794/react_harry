import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleupclick = () =>{
    let newtext = text.toUpperCase();
    
    setText(newtext);
    props.showAlert("Coverted To uppercase! ","success")
  }
  const handleloclick = () =>{
    let newtext = text.toLowerCase();

    setText(newtext);
    props.showAlert("Coverted To lowercase! ","success")
  }
 
  return (
    <>
        <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 >
        {props.heading}
      </h1>
      <div className="mb-3">
      
        <textarea
          className="form-control" id="myBox" rows="8"value={text}
          onChange={handleTextChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert To upper case</button>
      <button className="btn btn-primary mx-1 " onClick={handleloclick}>Convert To lower case</button>
    </div>
    <div className="container" my-3 style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary </h1>
        <p>{text.split(" ").length } words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
    </div>

    </>
  );
}
