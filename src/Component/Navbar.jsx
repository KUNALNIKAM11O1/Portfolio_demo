import {NavLink} from 'react-router-dom'

const Navbar=()=>{
    return(
      

        <>

        <div className="navbar navbar-expand-lg navbar-dark bg-dark fw-bold">
           <a href=""  className="navbar-brand"><h2 className="text-light fw-bold ">Portfolio</h2></a>

         

         <ul className="navbar nav ms-auto">
           <li className='nav-item'>
            <NavLink to="" className="nav-link">Home</NavLink>
           </li> <li className='nav-item'>
            <NavLink to="/about" className="nav-link">About</NavLink>
           </li>
                 <li className='nav-item'>
            <NavLink to="/skills" className="nav-link">Skills</NavLink>
           </li>
                 <li className='nav-item'>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
           </li>
                <li className='nav-item'>
            <NavLink to="/internship" className="nav-link">Internship</NavLink>
           </li>
                <li className='nav-item'>
            <NavLink to="/education" className="nav-link">Education</NavLink>
           </li>
                  <li className='nav-item'>
            <NavLink to="/resume" className="nav-link">Resume</NavLink>
           </li>
                  <li className='nav-item'>
            <NavLink to="/services" className="nav-link">Services</NavLink>
           </li>
                 <li className='nav-item'>
            <NavLink to="/achievements" className="nav-link">Achievements</NavLink>
           </li>
                 <li className='nav-item'>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
           </li>
         </ul>



        </div>
        </>

    )
}

export default Navbar;