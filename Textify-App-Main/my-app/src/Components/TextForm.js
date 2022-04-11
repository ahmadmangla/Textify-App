import React, { useState } from 'react'
import './TextFrom.css';
const TextForm = (props) => {
  const [text, setText] = useState("Enter text here")
  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  const handleUpClick = () => {
    setText(text.toUpperCase());  
    props.toggleAlert("Text is converted to Uppercase", "Success")
  }

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.toggleAlert("Text is converted to Lowercase", "Success")
  }

  const handleClearText = () => {
    setText('');
    props.toggleAlert("Text is cleared", "Success")
  }

  const handleClipboard = () => {
    navigator.clipboard.writeText(text)
    props.toggleAlert("Text is copied to clipboard", "Success")
  }

  function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    setText(str.join(' '))
    props.toggleAlert("Text is coverted to Titlecase", "Success")
  }

  return (
    <div className="mb-3 my-5">
      <h2>{props.heading}</h2>
      <textarea className="form-control" id="my-form" onChange={handleOnChange} placeholder={text} value={text} rows="8"></textarea>
      <div className='float-end'>Total Characters: {text.replace(/ /g, "").length}</div>
      <div className='Button-container my-3'>
        <button className={`btn btn-${props.buttonColor}`} onClick={handleUpClick}> Convert to UpperCase </button>
        <button className={`btn btn-${props.buttonColor}`} onClick={handleLowClick}> Convert to LowerCase </button>
        <button className={`btn btn-${props.buttonColor}`} onClick={() => titleCase(text)}> Convert to TitleCase </button>
        <button className='btn btn-danger' onClick={handleClearText}> Clear Text </button>
        <button className={`btn btn-${props.buttonColor}`} onClick={handleClipboard}> Copy Text to Clipboard </button>
      </div>
    </div>
  )
}

export default TextForm