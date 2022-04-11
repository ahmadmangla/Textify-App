import React , {useState} from 'react';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

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
  const toggleMode = () => {
    switch (mode) {
      case "dark":
        setMode("dark");
        toggleAlert("Dark Mode has been enabled", "Success")
        setbuttonColor("dark-mode-color");
        document.body.style.backgroundColor = "#32383e";
        document.body.style.color = "#ffffff";
        break;
      case "purple":
        setMode("purple");
        toggleAlert("Purple theme has been enabled", "Success")
        setbuttonColor("purple-theme-color");
        document.body.style.backgroundColor = "#666";
        document.body.style.color = "#ffffff";
      // case 2:
      //    day = "Tuesday";
      //   break;
      // case 3:
      //   day = "Wednesday";
      //   break;
      // case 4:
      //   day = "Thursday";
      //   break;
      // case 5:
      //   day = "Friday";
      //   break;
      // case 6:
      //   day = "Saturday";
    }

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

  
  return <>
    <Navbar title="Textifyy" mode={mode} toggleMode={toggleMode}/>
    <div className='container'>
      <Alert alert={alertMsg}/>
      <TextForm buttonColor={buttonColor} heading="Enter The Text Below" toggleAlert={toggleAlert}/>
    </div>
  </>
}

export default App