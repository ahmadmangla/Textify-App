import React, {useState} from 'react'

const TextForm = (props) => {
  const [text, setText] = useState("Enter text here")
  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  const handleUpClick = () => {
    setText(text.toUpperCase());
  }

  const handleLowClick = () => {
    setText(text.toLowerCase());
  }

  const handleClearText = ()=>{
    setText('');
  }

  const handleClipboard = () => {
    navigator.clipboard.writeText(text)
  }
  return (
    <div className="mb-3 my-3">
      <h2>{props.heading}</h2>
      <textarea className="form-control" id="my-form" onChange={handleOnChange} placeholder={text} value={text} rows="8"></textarea>
      <div className='float-end'>Total Characters: {text.replace(/ /g, "").length}</div>
      <button className='btn btn-primary my-3' onClick={handleUpClick}> Convert to UpperCase </button>
      <button className='btn btn-primary mx-2' onClick={handleLowClick}> Convert to LowerCase </button>
      <button className='btn btn-danger' onClick={handleClearText}> Clear Text </button>
      <button className='btn btn-primary mx-2' onClick={handleClipboard}> Copy Text to Clipboard </button>
    </div>
  )
}

export default TextForm