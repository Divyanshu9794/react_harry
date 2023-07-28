
import './App.css';
import TextForm from './components/TextForm'
import Navbar from './components/Navbar';
function App() {
  return (
    <>
   
<Navbar title="TextUtils" />
<div className="container" my-3>

<TextForm heading="Enter the text to analyse below"/>
</div>
{/* <Navbar /> */}
  </>
  );
}

export default App;
