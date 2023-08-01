
import './App.css';
import TextForm from './components/TextForm'
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
function App() {
  const [mode,setmode]= useState('light'); 
  const togglemode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor ='#042743';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor ='white';
    }
  }
  return (
    <>
   
<Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
<Alert alert="This is alert"/>
<div className="container" my-3>

<TextForm heading="Enter the text to analyse below" mode={mode}/>
{/* <About /> */}
</div>
{/* <Navbar /> */}
  </>
  );
}

export default App;
