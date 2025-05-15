import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/Signup.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

//     const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { email, password } = formData;

//     if (!email || !password) {
//     toast.error("Please enter both email and password");
//     return;
//     }

//   try {
//     const res = await axios.get(`http://localhost:5000/auth?email=${email}&password=${password}`);
//     if (res.data.length > 0) {
//       toast.success("Login successful");
//       navigate("/home");
//     } else {
//       toast.error("Invalid email or password");
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//     toast.error("Login failed");
//   }
// };

// const handleLogin = async (e) => {
//   e.preventDefault();
//   const { email, password } = formData;
//   if (!email || !password) {
//     toast.error("Please enter email and password");
//     return;
//   }

//   try {
//     const res = await axios.get(`http://localhost:5000/auth?email=${email}&password=${password}`);
    
//     if (res.data.length > 0) {
//       const authes = res.data[0];

//       // Check if user is blocked
//       if (authes.blocked) {
//         toast.error("Your account is blocked. Please contact the administrator.");
//         return;
//       }

//       toast.success("Login Success");
//       navigate('/home');
//     } else {
//       toast.error("Incorrect email or password");
//     }
//   } catch (error) {
//     toast.error("Login failed");
//     console.error(error);
//   }
// };

const handleLogin = async (e) => {
  e.preventDefault();
  const { email, password } = formData;
  if (!email || !password) {
    toast.error("Please enter email and password");
    return;
  }

  try {
    const res = await axios.get(`http://localhost:5000/auth?email=${email}`);
    
    if (res.data.length > 0) {
      const user = res.data[0];

      if (user.blocked) {
        toast.error("Your account is blocked. Please contact the administrator.");
        return;
      }

      if (user.password === password) { // Plain text (not secure in real apps)
        toast.success("Login Success");
        localStorage.setItem("isAuthenticated", "true");
        // navigate('/home');
        navigate('/home', { replace: true });

      } else {
        toast.error("Incorrect password");
      }
    } else {
      toast.error("User not found");
    }
  } catch (error) {
    toast.error("Login failed");
    console.error(error);
  }
};


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
                <h3 className="mb-5 text-uppercase">Login form</h3>
                <form onSubmit={handleLogin}>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example97">Email ID</label>
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" name="password" value={formData.password} id="password" onChange={handleChange} className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form3Example97">Password</label>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>
                </form>
                 <div className="d-flex justify-content-end pt-3">  
                    Alrady have an account
                    <NavLink to="/signup" className="nav-item nav-link mb-5">Signup</NavLink> 
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

export default Login
