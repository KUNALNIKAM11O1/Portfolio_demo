import Projectdata from "./Projectdata";

const Projects=()=>{
    return(
        <>
         <div className="container projects-section">
        <h2 className="projects-title " style={{textAlign:"center"}}>My Projects</h2>

        <div className="row justify-content-center ">

            {Projectdata.map((item,index)=>(

           

          <div className="col-md-8 m-2" style={{border:"2px solid black"}} key={index}>
            <div className="project-card border "  >

                

              <p className="project-name" >{item.project_name}</p>
              <p className="project-tech">{item.project_tech}</p>
              <p className="project-desc">{item.project_desc}
               
              </p>

            </div>
          </div>

           ))}

        </div>
      </div>
        </>
    )
}

export default Projects;