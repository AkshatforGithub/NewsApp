import React, { useState } from "react";

export default function Textfile(props) {
  
  const handleUpClick = ()=> {
    console.log("upercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event)=>{
    console.log("OnChange");
    setText(event.target.value)
  }

  const [text, setText] = useState('enter your text here');
  return (
    <>
      <form>
        <div className="container">
          <h1>
            {props.heading}
          </h1>
          <label for="exampleFormControlTextarea1"> </label>
          <textarea
            className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" >
            </textarea>
        </div>
      </form>
          <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
          <div className="container my-4">
            <h1>The sentence contains a certain quantity of words</h1> 
            <p>{text.split(" ").length} words and {text.length} characters</p>
           </div>
           <div className="container">
            <h1>time taken in reading your text </h1>
             <p>{0.008 * text.split(" ").length}minutes</p>
           </div>
    </>
  );
  
}
