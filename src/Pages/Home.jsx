import React, { useState } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Topbar from '../Component/Topbar'
import "../Styles/Home.css"
import { toast } from 'react-toastify'
import axios from 'axios'

const Home = () => {
  const [formdata,setFormdata] = useState ({
      name:"",
      email:"",
      service:"",
      message:"",
  });

  const handleChange = (e) => {
     const {name,value} = e.target;
    setFormdata((prevdata) => ({...prevdata,[name]:value}));
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
  if(formdata.name === "") {
    toast.error("Please enter name");
    return;
  }
  if(formdata.email === "") {
    toast.error("Please Enter email");
    return;
  }
  if(formdata.service === "") {
    toast.error("Please select service");
    return;
  }
  if(formdata.message === "") {
    toast.error("Please write message");
    return;
  }

  try {
    const res = await axios.post(`http://localhost:5000/service`, formdata);
    // const res = axios.post(`http://localhost:5000/service`, formdata);
    if(res.status === 201) {
      setFormdata({
        name:"",
        email:"",
        service:"",
        message:"",
      })
      toast.success("Contact created")
    }
  }
  catch(error) {
    toast.error("Field Faies");
    console.error(error);
  }
};

  return (
    <>
    <Topbar/>
    <Header/>
   <div>
  {/* Facts Start */}
  <div className="container-fluid facts py-5 pt-lg-0">
    <div className="container py-5 pt-lg-0">
      <div className="row gx-0">
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
          <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: 150}}>
            <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: 60, height: 60}}>
              <i className="fa fa-users text-primary" />
            </div>
            <div className="ps-4">
              <h5 className="text-white mb-0">Happy Clients</h5>
              <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
          <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{height: 150}}>
            <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{width: 60, height: 60}}>
              <i className="fa fa-check text-white" />
            </div>
            <div className="ps-4">
              <h5 className="text-primary mb-0">Projects Done</h5>
              <h1 className="mb-0" data-toggle="counter-up">12345</h1>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
          <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{height: 150}}>
            <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{width: 60, height: 60}}>
              <i className="fa fa-award text-primary" />
            </div>
            <div className="ps-4">
              <h5 className="text-white mb-0">Win Awards</h5>
              <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Facts Start */}
  {/* About Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-primary text-uppercase about">About Us</h5>
            <h1 className="mb-0">
              The Best IT Solution With 10 Years of Experience
            </h1>
          </div>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
            sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
            tempor eirmod magna dolore erat amet
          </p>
          <div className="row g-0 mb-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />Award Winning
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />Professional
                Staff
              </h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />24/7 Support
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary me-3" />Fair Prices
              </h5>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: 60, height: 60}}>
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Call to ask any question</h5>
              <h4 className="text-primary mb-0">+012 345 6789</h4>
            </div>
          </div>
          <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a>
        </div>
        <div className="col-lg-5" style={{minHeight: 500}}>
          <div className="position-relative h-100">
            <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" style={{objectFit: 'cover'}} />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Features Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600}}>
        <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
        <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4">
          <div className="row g-5">
            <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
              <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: 60, height: 60}}>
                <i className="fa fa-cubes text-white" />
              </div>
              <h4>Best In Industry</h4>
              <p className="mb-0">
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                diam dolor
              </p>
            </div>
            <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
              <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: 60, height: 60}}>
                <i className="fa fa-award text-white" />
              </div>
              <h4>Award Winning</h4>
              <p className="mb-0">
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                diam dolor
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow zoomIn" data-wow-delay="0.9s" style={{minHeight: 350}}>
          <div className="position-relative h-100">
            <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="img/feature.jpg" style={{objectFit: 'cover'}} />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row g-5">
            <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
              <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: 60, height: 60}}>
                <i className="fa fa-users-cog text-white" />
              </div>
              <h4>Professional Staff</h4>
              <p className="mb-0">
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                diam dolor
              </p>
            </div>
            <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
              <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: 60, height: 60}}>
                <i className="fa fa-phone-alt text-white" />
              </div>
              <h4>24/7 Support</h4>
              <p className="mb-0">
                Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                diam dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features Start */}
  {/* Service Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600}}>
        <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
        <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="fa fa-shield-alt text-white" />
            </div>
            <h4 className="mb-3">Cyber Security</h4>
            <p className="m-0">
              Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
              ipsum dolore sed
            </p>
            <a className="btn btn-lg btn-primary rounded" href>
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="fa fa-chart-pie text-white" />
            </div>
            <h4 className="mb-3">Data Analytics</h4>
            <p className="m-0">
              Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
              ipsum dolore sed
            </p>
            <a className="btn btn-lg btn-primary rounded" href>
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="fa fa-code text-white" />
            </div>
            <h4 className="mb-3">Web Development</h4>
            <p className="m-0">
              Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
              ipsum dolore sed
            </p>
            <a className="btn btn-lg btn-primary rounded" href>
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="fab fa-android text-white" />
            </div>
            <h4 className="mb-3">Apps Development</h4>
            <p className="m-0">
              Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
              ipsum dolore sed
            </p>
            <a className="btn btn-lg btn-primary rounded" href>
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon">
              <i className="fa fa-search text-white" />
            </div>
            <h4 className="mb-3">SEO Optimization</h4>
            <p className="m-0">
              Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
              ipsum dolore sed
            </p>
            <a className="btn btn-lg btn-primary rounded" href>
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
          <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
            <h3 className="text-white mb-3">Call Us For Quote</h3>
            <p className="text-white mb-3">
              Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est
              magna stet eirmod
            </p>
            <h2 className="text-white mb-0">+012 345 6789</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}

 <div>
  {/* Pricing Plan Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600}}>
        <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
        <h1 className="mb-0">
          We are Offering Competitive Prices for Our Clients
        </h1>
      </div>
      <div className="row g-0">
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
          <div className="bg-light rounded">
            <div className="border-bottom py-4 px-5 mb-4">
              <h4 className="text-primary mb-1">Basic Plan</h4>
              <small className="text-uppercase">For Small Size Business</small>
            </div>
            <div className="p-5 pt-0">
              <h1 className="display-5 mb-3">
                <small className="align-top" style={{fontSize: 22, lineHeight: 45}}>$</small>49.00<small className="align-bottom" style={{fontSize: 16, lineHeight: 40}}>/ Month</small>
              </h1>
              <div className="d-flex justify-content-between mb-3">
                <span>HTML5 &amp; CSS3</span><i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Responsive Layout</span><i className="fa fa-times text-danger pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1" />
              </div>
              <a href className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div className="bg-white rounded shadow position-relative" style={{zIndex: 1}}>
            <div className="border-bottom py-4 px-5 mb-4">
              <h4 className="text-primary mb-1">Standard Plan</h4>
              <small className="text-uppercase">For Medium Size Business</small>
            </div>
            <div className="p-5 pt-0">
              <h1 className="display-5 mb-3">
                <small className="align-top" style={{fontSize: 22, lineHeight: 45}}>$</small>99.00<small className="align-bottom" style={{fontSize: 16, lineHeight: 40}}>/ Month</small>
              </h1>
              <div className="d-flex justify-content-between mb-3">
                <span>HTML5 &amp; CSS3</span><i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Responsive Layout</span><i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1" />
              </div>
              <a href className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
          <div className="bg-light rounded">
            <div className="border-bottom py-4 px-5 mb-4">
              <h4 className="text-primary mb-1">Advanced Plan</h4>
              <small className="text-uppercase">For Large Size Business</small>
            </div>
            <div className="p-5 pt-0">
              <h1 className="display-5 mb-3">
                <small className="align-top" style={{fontSize: 22, lineHeight: 45}}>$</small>149.00<small className="align-bottom" style={{fontSize: 16, lineHeight: 40}}>/ Month</small>
              </h1>
              <div className="d-flex justify-content-between mb-3">
                <span>HTML5 &amp; CSS3</span><i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Responsive Layout</span><i className="fa fa-check text-primary pt-1" />
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Cross-browser Support</span><i className="fa fa-check text-primary pt-1" />
              </div>
              <a href className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Pricing Plan End */}
  {/* Quote Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-7">
          <div className="section-title position-relative pb-3 mb-5">
            <h5 className="fw-bold text-primary text-uppercase">
              Request A Quote
            </h5>
            <h1 className="mb-0">
              Need A Free Quote? Please Feel Free to Contact Us
            </h1>
          </div>
          <div className="row gx-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 className="mb-4">
                <i className="fa fa-reply text-primary me-3" />Reply within 24
                hours
              </h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 className="mb-4">
                <i className="fa fa-phone-alt text-primary me-3" />24 hrs
                telephone support
              </h5>
            </div>
          </div>
          <p className="mb-4">
            Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
            ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
            rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
            et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit.
            Sea dolore sanctus sed et. Takimata takimata sanctus sed.
          </p>
          <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
            <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: 60, height: 60}}>
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Call to ask any question</h5>
              <h4 className="text-primary mb-0">+012 345 6789</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
            <form onSubmit={handleSubmit} >
              <div className="row g-3">
                <div className="col-xl-12">
                  <input type="text" name='name' value={formdata.name} onChange={handleChange} id='name' className="form-control bg-light border-0" placeholder="Your Name" style={{height: 55}} />
                </div>
                <div className="col-12">
                  <input type="email" name='email' value={formdata.email} onChange={handleChange} id='email' className="form-control bg-light border-0" placeholder="Your Email" style={{height: 55}} />
                </div>
                <div className="col-12">
                  <select name='service' value={formdata.service} onChange={handleChange} id='service' className="form-select bg-light border-0" style={{height: 55}}>
                    <option selected>Select A Service</option>
                    <option value={1}>Service 1</option>
                    <option value={2}>Service 2</option>
                    <option value={3}>Service 3</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea name='message' value={formdata.message} onChange={handleChange}  id='message' className="form-control bg-light border-0" rows={3} placeholder="Message" defaultValue={""} />
                </div>
                <div className="col-12">
                  <button className="btn btn-dark w-100 py-3" type="submit">
                    Request A Quote
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Quote End */}
  {/* Testimonial Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{maxWidth: 600}}>
        <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
        <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>
      </div>
      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img className="img-fluid rounded" src="img/testimonial-1.jpg" style={{width: 60, height: 60}} />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Client Name</h4>
              <small className="text-uppercase">Profession</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
            stet amet eirmod eos labore diam
          </div>
        </div>
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img className="img-fluid rounded" src="img/testimonial-2.jpg" style={{width: 60, height: 60}} />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Client Name</h4>
              <small className="text-uppercase">Profession</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
            stet amet eirmod eos labore diam
          </div>
        </div>
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img className="img-fluid rounded" src="img/testimonial-3.jpg" style={{width: 60, height: 60}} />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Client Name</h4>
              <small className="text-uppercase">Profession</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
            stet amet eirmod eos labore diam
          </div>
        </div>
        <div className="testimonial-item bg-light my-4">
          <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
            <img className="img-fluid rounded" src="img/testimonial-4.jpg" style={{width: 60, height: 60}} />
            <div className="ps-4">
              <h4 className="text-primary mb-1">Client Name</h4>
              <small className="text-uppercase">Profession</small>
            </div>
          </div>
          <div className="pt-4 pb-5 px-5">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
            stet amet eirmod eos labore diam
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  {/* Team Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600}}>
        <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
        <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div className="team-item bg-light rounded overflow-hidden">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src="img/team-1.jpg" alt />
              <div className="team-social">
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
              </div>
            </div>
            <div className="text-center py-4">
              <h4 className="text-primary">Full Name</h4>
              <p className="text-uppercase m-0">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
          <div className="team-item bg-light rounded overflow-hidden">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src="img/team-2.jpg" alt />
              <div className="team-social">
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
              </div>
            </div>
            <div className="text-center py-4">
              <h4 className="text-primary">Full Name</h4>
              <p className="text-uppercase m-0">Designation</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
          <div className="team-item bg-light rounded overflow-hidden">
            <div className="team-img position-relative overflow-hidden">
              <img className="img-fluid w-100" src="img/team-3.jpg" alt />
              <div className="team-social">
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
              </div>
            </div>
            <div className="text-center py-4">
              <h4 className="text-primary">Full Name</h4>
              <p className="text-uppercase m-0">Designation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
</div>

   </div>

    <Footer />
    </>
  )
}
export default Home
