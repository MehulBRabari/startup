import React from 'react'

const Topbar = () => {
  return (
   <div className="container-fluid bg-dark px-5 d-none d-lg-block">
  <div className="row gx-0">
    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
      <div className="d-inline-flex align-items-center" style={{height: 45}}>
        <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2" />123 Street, New York,
          USA</small>
        <small className="me-3 text-light"><i className="fa fa-phone-alt me-2" />+012 345 6789</small>
        <small className="text-light"><i className="fa fa-envelope-open me-2" />info@example.com</small>
      </div>
    </div>
    <div className="col-lg-4 text-center text-lg-end">
      <div className="d-inline-flex align-items-center" style={{height: 45}}>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
        <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Topbar
