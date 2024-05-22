import React, { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Textfile(props) {
  const handleUpClick = () => {
    console.log("upercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // props.showalert("converted to uppercase!", "success")
    toast.success("Converted to uppercase!");
  };
  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  };

  const [text, setText] = useState(""); 
  return (
    <>
      
      <form>
        <div className="container my-4">
          <h1>{props.heading}</h1>
          <label for="exampleFormControlTextarea1"> </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="enter your text here ..."
          ></textarea>
        </div>
      </form>
      <button className="btn btn-primary ms-2" onClick={handleUpClick}>
        convert to uppercase
      </button>
      <div className="container my-4">
        <h1>The sentence contains a certain quantity of words</h1>
        <p>
          {text ? text.trim().split(/\s+/).length : 0} words and{" "}
          {text.trim().length} characters.
        </p>
      </div>
      <div className="container">
        <h1>Time taken in reading your text </h1>
        <p>
          {text ? (0.15 * text.split("").length).toPrecision(1) : 0} seconds
        </p>
      </div>
      <ToastContainer />
    </>
  );
}
