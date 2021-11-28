import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Curtain from './Components/Curtain';
import Year from './Components/Year';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element = {<Curtain/>}/>
          <Route path="/new_year" element = {<Year/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
