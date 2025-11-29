import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Edu from './Component/Edu';
import Resume from './Component/Resume';
import Ach from './Component/Ach';
import Contact from './Component/Contact';
import Skills from './Component/Skills';
import About from './Component/About';
import Projects from './Projects';
import Intern from './Component/Intern';
import Services from './Component/Sevices';
import { Projectdata } from './Projectdata';
import Footer from './Component/Footer';
import Pagenotfound from './Component/Pagenotfound';

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