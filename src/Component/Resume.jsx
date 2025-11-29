

const Resume=()=>{
    return(
        <>

    <section className="container my-1">
      <h2 className="text-center mb-4">Resume</h2>

      <div
        className="card p-4 shadow-sm border border-dark"
        style={{ borderWidth: "2px" ,overflowX:"auto"}}
      >
        <h3 className="mb-3">Kunal Nikam</h3>

        <p><strong>Email:</strong> nik@gmail.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Location:</strong> Pune, Maharashtra, India</p>

        <hr />

        <h4>Professional Summary</h4>
        <p>
          Enthusiastic Frontend Developer with strong skills in HTML, CSS,
          JavaScript, React, and Bootstrap. Passionate about building clean,
          responsive UI and delivering seamless user experiences.
        </p>

        <hr />

        <h4>Skills</h4>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Bootstrap</li>
          <li>Responsive Web Design</li>
          <li>Git & GitHub</li>
        </ul>

        <hr />

        <h4>Education</h4>
        <p><strong>B.E. Computer Engineering</strong></p>
        <p>Sinhgad College of Engineering, Pune</p>
        <p>2021 to 2025</p>

        <hr />

      
        <div className="text-center mt-3">
          <a
            href="/resume.pdf"       
            download
            className="btn btn-dark px-4 py-2"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
        
        </>
    )
}

export default Resume;