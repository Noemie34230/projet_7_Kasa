

import Home from './pages/Home';
import About from './pages/About';
import Error from './components/Error';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Accomodation from './pages/Accomodation';



function App() {




  return (
    
    <Router >
      <Header/>
          <Routes>

            <Route exact path="/" element={<Home/>}/>
              
            

            <Route path="/about" element={<About/>}/>
              
           
            
            <Route path="*" element= {<Error/>}/>

            <Route path="/:id" element = {<Accomodation/>}/>
              
           

          </Routes>
          <Footer/>
      </Router>
    
  );
}

export default App;
