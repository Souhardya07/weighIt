
import './App.css';
import Aboutus from './screens/Aboutus';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
import Services from './screens/Services';
import Contactus from './screens/Contactus';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
  return (
    <Router>
    <div >
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/aboutus' element={<Aboutus/>}/>
      <Route exact path='/services' element={<Services/>}/>
      <Route exact path='/contactus' element={<Contactus/>}/>
     </Routes>
    </div>
   </Router>
  );
}

export default App;
