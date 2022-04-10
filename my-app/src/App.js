import React , {useState} from 'react'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

const App = () => {
  const [mode, setMode] = useState("light")
  const [buttonColor, setbuttonColor] = useState("primary")
  const toggleMode = () => {
    if(mode=="light"){
      setMode("dark");
      setbuttonColor("dark-mode-color")
      document.body.style.backgroundColor = "#32383e";
      document.body.style.color = "#ffffff";
    }
    else{
      setMode("light");
      setbuttonColor("primary")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "";
    }
  }
  return <>
    <Navbar title="Textify" mode={mode} toggleMode={toggleMode}/>
    <div className='container'>
      <TextForm buttonColor={buttonColor} heading="Enter The Text Below" />
    </div>
  </>
}

export default App