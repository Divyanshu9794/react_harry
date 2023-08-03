
import './App.css';
import TextForm from './components/TextForm'
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
function App() {
  const [mode,setmode]= useState('light'); 
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark Mode is Enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light  Mode is Enabled","success");
    }
  }
  return (
    <>
   
<Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
<Alert alert={alert}/>
<div className="container" my-3>

<TextForm  showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
{/* <About /> */}
</div>
{/* <Navbar /> */}
  </>
  );
}

export default App;
