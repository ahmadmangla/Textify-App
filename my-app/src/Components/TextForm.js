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

  function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for(var i=0; i< str.length ; i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    setText(str.join(' '))
  }

  return (
    <div className="mb-3 my-3">
      <h2>{props.heading}</h2>
      <textarea className="form-control" id="my-form" onChange={handleOnChange} placeholder={text} value={text} rows="8"></textarea>
      <div className='float-end'>Total Characters: {text.replace(/ /g, "").length}</div>
      <button className='btn btn-primary my-3' onClick={handleUpClick}> Convert to UpperCase </button>
      <button className='btn btn-primary mx-2' onClick={handleLowClick}> Convert to LowerCase </button>
      <button className='btn btn-primary ' onClick={() => titleCase(text)}> Convert to TitleCase </button>
      <button className='btn btn-danger mx-2' onClick={handleClearText}> Clear Text </button>
      <button className='btn btn-primary' onClick={handleClipboard}> Copy Text to Clipboard </button>
    </div>
  )
}

export default TextForm