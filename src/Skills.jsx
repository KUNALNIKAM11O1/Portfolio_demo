const Skills=()=>{
    return(
        <>
        <div className="container skills-section mt-4" style={{border:"2px solid gray",borderRadius:"10px"}}>
        <h2 className="skills-title text-center mb-5 p-2"><h1>My Skills</h1></h2>

        <div className="row">

         
          <div className="col-md-6">
            <div className="skill-card">
              <p className="skill-name"><h2>HTML & CSS</h2></p>
              <p className="skill-desc">
                Strong knowledge of modern HTML structure and responsive CSS layouts.
                Comfortable with Bootstrap, Flexbox, and Grid for creating clean UI designs.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="skill-card">
              <p className="skill-name"><h2>JavaScript</h2></p>
              <p className="skill-desc">
                Good understanding of core JS concepts, DOM manipulation, ES6 features,
                and building interactive web pages with modern practices.
              </p>
            </div>
          </div>

          
          <div className="col-md-6">
            <div className="skill-card">
              <p className="skill-name"><h2>React.js</h2></p>
              <p className="skill-desc">
                Hands-on experience with functional components, props, state, hooks,
                routing, and creating reusable UI components in React.
              </p>
            </div>
          </div>

        
          <div className="col-md-6">
            <div className="skill-card">
              <p className="skill-name"><h2>Java</h2></p>
              <p className="skill-desc">
                Good command over Java fundamentals, OOP concepts, and backend logic 
                used in full stack development.
              </p>
            </div>
          </div>

         
          <div className="col-md-6">
            <div className="skill-card">
              <p className="skill-name"><h2>Flutter</h2></p>
              <p className="skill-desc">
                Ability to build cross-platform mobile apps with modern UI components 
                and clean navigation flow.
              </p>
            </div>
          </div>

          
          <div className="col-md-6">
            <div className="skill-card">
              <p className="skill-name"><h2>Bootstrap</h2></p>
              <p className="skill-desc">
                Strong in creating responsive websites quickly using Bootstrap components,
                grids, and utilities.
              </p>
            </div>
          </div>

         
        </div>
      </div>
        </>
    )
}

export default Skills;