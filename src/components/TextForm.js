import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleupclick = () =>{
    let newtext = text.toUpperCase();

    setText(newtext)
  }
 
  return (
    <div>
      <h1>
        {props.heading} - {text}
      </h1>
      <div className="mb-3">
      
        <textarea
          className="form-control" id="myBox" rows="8"value={text}
          onChange={handleTextChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleupclick}>Convert To upper case</button>
    </div>
  );
}
