import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { BrowserRouter,Route, Routes } from "react-router-dom";



function App() {
  const [darkMode,setDarkMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    },1500)
  }
  const toggleMode = () => {
    if(darkMode=='light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled","success");
    }else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success");
    }
  }
  return (
    <>
    <BrowserRouter>
        <Navbar title="Pinku's Food Blogs" mode={darkMode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">

        <Routes>

        <Route exact path="/about" element={<About />}></Route>

        <Route
          exact path="/"
          
          element={
            // <Textbox
            //   showAlert={showAlert}
            //   heading="Enter Text to analyze "
            //   mode={mode}
            // />
            <TextForm heading="Enter the text"/>

          }
        ></Route>
        </Routes>

        </div>
    
    </BrowserRouter>
    </>
  );
}

export default App;
