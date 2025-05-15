import React from 'react'
import Topbar from '../Component/Topbar'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Price = () => {
  return (
    <>
    <Topbar/>
    <Navbar title="Prices" breadcrumb="Prices"/>
   <div>
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: 600}}>
        <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
        <h1 className="mb-0">We are Offering Competitive Prices for Our Clients</h1>
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
              <div className="d-flex justify-content-between mb-3"><span>HTML5 &amp; CSS3</span><i className="fa fa-check text-primary pt-1" /></div>
              <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1" /></div>
              <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-times text-danger pt-1" /></div>
              <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1" /></div>
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
              <div className="d-flex justify-content-between mb-3"><span>HTML5 &amp; CSS3</span><i className="fa fa-check text-primary pt-1" /></div>
              <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1" /></div>
              <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary pt-1" /></div>
              <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1" /></div>
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
              <div className="d-flex justify-content-between mb-3"><span>HTML5 &amp; CSS3</span><i className="fa fa-check text-primary pt-1" /></div>
              <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1" /></div>
              <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary pt-1" /></div>
              <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-check text-primary pt-1" /></div>
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
            <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
            <h1 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
          </div>
          <div className="row gx-3">
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 className="mb-4"><i className="fa fa-reply text-primary me-3" />Reply within 24 hours</h5>
            </div>
            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3" />24 hrs telephone support</h5>
            </div>
          </div>
          <p className="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
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
            <form>
              <div className="row g-3">
                <div className="col-xl-12">
                  <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height: 55}} />
                </div>
                <div className="col-12">
                  <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{height: 55}} />
                </div>
                <div className="col-12">
                  <select className="form-select bg-light border-0" style={{height: 55}}>
                    <option selected>Select A Service</option>
                    <option value={1}>Service 1</option>
                    <option value={2}>Service 2</option>
                    <option value={3}>Service 3</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea className="form-control bg-light border-0" rows={3} placeholder="Message" defaultValue={""} />
                </div>
                <div className="col-12">
                  <button className="btn btn-dark w-100 py-3" type="submit">Request A Quote</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Quote End */}
  {/* Vendor Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5 mb-5">
      <div className="bg-white">
        <div className="owl-carousel vendor-carousel">
          <img src="img/vendor-1.jpg" alt />
          <img src="img/vendor-2.jpg" alt />
          <img src="img/vendor-3.jpg" alt />
          <img src="img/vendor-4.jpg" alt />
          <img src="img/vendor-5.jpg" alt />
          <img src="img/vendor-6.jpg" alt />
          <img src="img/vendor-7.jpg" alt />
          <img src="img/vendor-8.jpg" alt />
          <img src="img/vendor-9.jpg" alt />
        </div>
      </div>
    </div>
  </div>
  {/* Vendor End */}
</div>

    
    <Footer/>
    </>
  )
}

export default Price
