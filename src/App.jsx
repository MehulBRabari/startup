import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blog_grid from "./Pages/Blog_grid";
import Blog_details from "./Pages/Blog_details";
import Price from "./Pages/price";
import Features from "./Pages/Features";
import Contact from "./Pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Managecontact from "./Pages/Managecontact";
import Requestdata from "./Pages/Requestdata";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Manageuser from "./Pages/Manageuser";
import PrivateRoute from "./Component/ProtectedRoute";

// ✅ Redirect to home if already logged in
const RedirectIfLoggedIn = ({ children }) => {
  const isAuth = localStorage.getItem("isAuthenticated");
  return isAuth ? <Navigate to="/home" /> : children;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<RedirectIfLoggedIn><Login /></RedirectIfLoggedIn>} />
          <Route path="/login" element={<RedirectIfLoggedIn><Login /></RedirectIfLoggedIn>} />
          <Route path="/signup" element={<RedirectIfLoggedIn><Signup /></RedirectIfLoggedIn>} />

          {/* Private Routes */}
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="/service" element={<PrivateRoute><Services /></PrivateRoute>} />
          <Route path="/bloggrid" element={<PrivateRoute><Blog_grid /></PrivateRoute>} />
          <Route path="/blogdetail" element={<PrivateRoute><Blog_details /></PrivateRoute>} />
          <Route path="/price" element={<PrivateRoute><Price /></PrivateRoute>} />
          <Route path="/feature" element={<PrivateRoute><Features /></PrivateRoute>} />
          <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
          <Route path="/managecontact" element={<PrivateRoute><Managecontact /></PrivateRoute>} />
          <Route path="/requiest" element={<PrivateRoute><Requestdata /></PrivateRoute>} />
          <Route path="/manageuser" element={<PrivateRoute><Manageuser /></PrivateRoute>} />
          
          {/* Catch-all: if no route matched */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
