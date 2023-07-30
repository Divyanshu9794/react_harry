
import './App.css';
// import TextForm from './components/TextForm'
import Navbar from './components/Navbar';
import About from './components/About';
function App() {
  return (
    <>
   
<Navbar title="TextUtils" />
<div className="container" my-3>

{/* <TextForm heading="Enter the text to analyse below"/> */}
<About />
</div>
{/* <Navbar /> */}
  </>
  );
}

export default App;
