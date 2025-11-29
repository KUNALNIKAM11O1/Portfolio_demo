import Footer from './Footer'

const Contact=()=>{
    return(
        <>

        <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Me</h2>
          

          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="you@example.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Share your views about my portfolio"></textarea>
            </div>
            <button type="button" className="btn btn-primary">Send message</button>
          </form>
        </div>

        <div className="col-md-6">
          <h3>Contact details</h3>
          <p className="mb-1"><strong>Email:</strong> xyz@port.com</p>
          <p className="mb-1"><strong>Phone:</strong> +91 22 44 55 99 12</p>
          <p className="mb-1"><strong>Location:</strong> Pune / India</p>

          
        </div>
      </div>
    </div>

    <Footer/>
        </>
    )
}

export default Contact;