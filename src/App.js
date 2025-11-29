import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Edu from './Edu';
import Resume from './Resume';
import Ach from './Ach';
import Contact from './Contact';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Intern from './Intern';
import Services from './Sevices';
import { Projectdata } from './project_data';
import Footer from './Footer';
import Pagenotfound from './Pagenotfound';

const App=()=>{

  return(
    <>
    
    <Router>

      <Navbar/>

      <Routes >


       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/skills' element={<Skills/>} />
       <Route path='/projects' element={<Projects/>}
            
       
       />
       <Route path='/internship' element={<Intern/>} />
       <Route path='/education' element={<Edu/>} />
       <Route path='/resume' element={<Resume/>} />
       <Route path='/services' element={<Services/>} />
       <Route path='/achievements' element={<Ach/>} />
       <Route path='/contact' element={<Contact/>} />

       <Route path='*' element={<Pagenotfound/>}/>

       



      </Routes>

      <Footer/>

      

       



    </Router>
    
    </>


  )
}

export default App;