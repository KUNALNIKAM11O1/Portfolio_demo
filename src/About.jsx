const About=()=>{
    return(
        <>
        <div className="container about-section mt-4" style={{border:"2px solid gray",borderRadius:"10px"}}>
        <div className="row justify-content-center p-4 ">
        
        
          <div className="col-md-8">
            <div className="about-card">

              <h2 className="about-title mb-4">About Me</h2>

              <p><span className="info-title">Name:</span> Kunal Nikam</p>
              <p><span className="info-title">Role:</span> Full Stack Developer</p>
              <p><span className="info-title">Address:</span> Satara District, Maharashtra, India</p>
              <p><span className="info-title">College:</span> Sinhgad College of Engineering, Pune</p>
              <p><span className="info-title">Education:</span> BE – Computer Engineering</p>

              <p className="description">
                I am a passionate Full Stack Developer with a strong understanding of
                modern web technologies. I love building fast, clean, and user-friendly 
                applications. I have hands-on experience in Flutter, Java, HTML, CSS, 
                Bootstrap, JavaScript, and React. 
                <br /><br />
                I enjoy solving real-world technical problems and continuously improving 
                my skills by learning new tools, frameworks, and best practices. My goal 
                is to contribute to impactful projects and grow as a software engineer.  
              </p>

            </div>
          </div>

        </div>
      </div>
        </>
    )
}

export default About;