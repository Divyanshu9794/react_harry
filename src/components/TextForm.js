import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>
        {props.heading} - {text}
      </h1>
      <div className="mb-3">
        {/* Add the onChange event handler to update the 'text' state */}
        <textarea
          className="form-control" id="myBox" rows="8"value={text}
          onChange={handleTextChange}
        ></textarea>
      </div>
      <button className="btn btn-primary">Convert To upper case</button>
    </div>
  );
}
