import React, {useState} from 'react'

const TextForm = (props) => {
  const [text, setText] = useState("Enter text here")
  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  const handleUpClick = () => {
    setText(text.toUpperCase());
  }

  return (
    <div className="mb-3 my-3">
      <h1>{props.heading}</h1>
      <textarea className="form-control" id="my-form" onChange={handleOnChange} placeholder={text} value={text} rows="8"></textarea>
      <div className='float-end'>Total Characters: {text.replace(/ /g, "").length}</div>
      <button className='btn btn-primary my-3' onClick={handleUpClick}> Convert to UpperCase </button>
    </div>
  )
}

export default TextForm