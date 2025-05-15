import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

const Signup = () => {
 const  [formdata,setFormdata] = useState ({
     fname:"",
     lname:"",
     email:"",
     password:"",
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormdata((prevdata) => ({...prevdata,[name]:value}));
  }

  const handleSubmit =async (e) => {
    e.preventDefault()
  
if (formdata.fname === "") {
  toast.error("Please enter first name");
  return;
}

if (formdata.lname === "") {
  toast.error("Please enter last name");
  return;
}

if(formdata.email === "") {
  toast.error("Please enter email");
  return;
}

if(formdata.password === "") {
  toast.error("Create password");
  return;
}

 const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

  if (!passwordRegex.test(formdata.password)) {
    toast.error("Password must be at least 8 characters, include uppercase, lowercase, number, and special character");
    return;
  }
 
try {
  const res = await axios.post(`http://localhost:5000/auth`, formdata);
if (res.status === 201) {
  setFormdata({
    fname:"",
    lname:"",
    email:"",
    password:"",
  });
  toast.success("Signup Successfull");

//   Redirect to login
navigate("/login");
}
}
catch (error) {
  toast.error("Failed to signup");
  console.error(error);
}
};
 const navigate = useNavigate();
  return (
    <>
   <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem'}} />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Student registration form</h3>
                <form onSubmit={handleSubmit} >
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" name="fname" id="fname" value={formdata.fname} onChange={handleChange} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" name="lname" id="lname" value={formdata.lname} onChange={handleChange} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="email" name="email"  value={formdata.email} onChange={handleChange} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example97">Email ID</label>
                </div>
                 <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" id="password" name="password" value={formdata.password} onChange={handleChange} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example97">Password</label>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>
                </form>
                 <div className="d-flex justify-content-end pt-3">
                    If you dont have an account than
                    <NavLink to="/login" className="nav-item nav-link">Login</NavLink> 
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Signup
