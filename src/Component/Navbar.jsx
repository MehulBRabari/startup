import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({title,breadcrumb}) => {

 const navigate = useNavigate();
 
 const handleLogoute = () => {
  localStorage.removeItem('isAuthenticated');
  navigate('/login');
};


  return (
    <>
    <div className="container-fluid position-relative p-0">
  <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
    <a href="index.html" className="navbar-brand p-0">
      <h1 className="m-0"><i className="fa fa-user-tie me-2" />Startup</h1>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-0">
        <NavLink to="/home" className="nav-item nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
        <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
          <div className="dropdown-menu m-0">
            <NavLink to="/bloggrid" className="dropdown-item">Blog Grid</NavLink>
            <NavLink to="/blogdetail" className="dropdown-item">Blog Detail</NavLink>
          </div>
        </div>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu m-0">
            <NavLink to="/price" className="dropdown-item">Pricing Plan</NavLink>
            <NavLink to="/feature" className="dropdown-item">Our features</NavLink>
            <a href="team.html" className="dropdown-item">Team Members</a>
            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
            <a href="quote.html" className="dropdown-item">Free Quote</a>
          </div>
        </div>
         <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage Data</a>
          <div className="dropdown-menu m-0">
            <NavLink to="/managecontact" className="dropdown-item">Manage Contact</NavLink>
            <NavLink to="/requiest" className="dropdown-item">Manage Requiest</NavLink>
            <NavLink to="/manageuser" className="dropdown-item">Manage User</NavLink>
          </div>
        </div>
        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
      </div>
        <button onClick={handleLogoute} className="btn btn-primary py-1 px-2 ms-3">Logout</button> 
      <butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search" /></butaton>
      <a href="https://htmlcodex.com/startup-company-website-template" className="btn btn-primary py-2 px-4 ms-3">Download Pro Version</a>
    </div>
  </nav>
  <div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: 90}}>
    <div className="row py-5">
      <div className="col-12 pt-lg-5 mt-lg-5 text-center">
        <h1 className="display-4 text-white animated zoomIn">{title}</h1>
        <NavLink to="/" className="h5 text-white">Home</NavLink>
        <i className="far fa-circle text-white px-2" />
        <a href className="h5 text-white">{breadcrumb}</a>
      </div>
    </div>
  </div>
</div>

    </> 
  )
}

export default Navbar
