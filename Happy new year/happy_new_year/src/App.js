import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import Curtain from './Components/Curtain';
import Year from './Components/Year';

function App() {

  const [toYear, setToYear] = useState(false);
  const delayPage = (vidTime) => {
    console.log(vidTime);
    setInterval(() => {
      window.location.href = 'new_year';      
    }, 2000);
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element = {<Curtain delayPageload={delayPage} />}/>
          <Route path="/new_year" element = {<Year/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
