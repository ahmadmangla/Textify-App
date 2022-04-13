import React, { useState } from 'react';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const [buttonColor, setbuttonColor] = useState("primary");
  const [alertMsg, setAlertMsg] = useState(null);
  const toggleAlert = (msg, type) => {
    setAlertMsg({
      message: msg,
      type: type
    });

    setTimeout(() => {
      setAlertMsg(null)
    }, 3000);

  }
  const toggleMode = (color, lightcolor) => {
    const capitalize = (text) => {
      const str = text;
      const str2 = str.charAt(0).toUpperCase() + str.slice(1);
      return str2;
    }
    setMode(color);
    toggleAlert(`${capitalize(color)} theme has been enabled`, "Success")
    setbuttonColor(`${color}-mode-color`);
    document.body.style.backgroundColor = lightcolor;
    document.body.style.color = "#ffffff";
    // if(mode==="light"){
    //   setMode("dark");
    //   toggleAlert("Dark Mode has been enabled", "Success")
    //   setbuttonColor("dark-mode-color");
    //   document.body.style.backgroundColor = "#32383e";
    //   document.body.style.color = "#ffffff";
    // }
    // else{
    //   setMode("light");
    //   setbuttonColor("primary")
    //   document.body.style.backgroundColor = "white";
    //   document.body.style.color = "";
    // }
  }

  return <React.Fragment>
    <Router>
      <Navbar title="Textifyy" page="About" mode={mode} toggleMode={toggleMode} />
      <div className='container'>
        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm buttonColor={buttonColor} heading="Enter The Text Below" toggleAlert={toggleAlert} />}>
          </Route>
        </Routes>
      </div>
    </Router>
    <Alert alert={alertMsg} />
  </React.Fragment>
}

export default App