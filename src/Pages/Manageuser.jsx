import { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { toast } from "react-toastify";


const Manageuser = () => {
     const [auth, setUser] = useState([]);

  // Fetch contact data on component mount
  useEffect(() => {
    fetchUser();
  }, []);

  // GET: Fetch all contacts
  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/auth");
      setUser(res.data);
    } catch (error) {
      console.error("Failed to fetch contacts", error);
      toast.error("Failed to load contacts");
    }
  };

  const [editData, setEditData] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const openEditModal = (data) => {
    setEditData(data);
    // manually open modal using Bootstrap JS if needed:
    const modal = new bootstrap.Modal(document.getElementById("myModal"));
    modal.show();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.put(`http://localhost:5000/auth/${editData.id}`, editData);
      if (res.status === 200) {
        toast.success("User data updated successfully");
        // Optionally refresh data or close modal
      }
    } catch (err) {
      toast.error("Update failed");
      console.error(err);
    }
  };
  
  
  // DELETE: Remove contact
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/auth/${id}`);
      toast.success("User Deleted");
      // Re-fetch updated contact list
      fetchUser();
    } catch (error) {
      console.error("Failed to delete user", error);
      toast.error("Failed to delete user");
    }
  };

  const toggleBlockStatus = async (user) => {
  try {
    const updatedUser = { ...user, blocked: !user.blocked };
    const res = await axios.put(`http://localhost:5000/auth/${user.id}`, updatedUser);
    if (res.status === 200) {
      toast.success(`User ${updatedUser.blocked ? 'blocked' : 'unblocked'} successfully`);
      fetchUser(); // Refresh the user list
    }
  } catch (error) {
    toast.error("Failed to update user status");
    console.error(error);
  }
};


  return (
   <>
   <Navbar title="Manage User" breadcrumb="Manageuser"/>
   <div className="container mt-4">
    <h2>Table Head Colors</h2>
  <p>You can use any of the contextual classes to only add a color to the table header:</p>
  <table class="table">
    <thead class="table-success">
      <tr>
        <th>Id</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {auth.length > 0 ? (
            auth.map((authes) => (
            <tr>
                <td>{authes.id}</td>
                <td>{authes.fname}</td>
                <td>{authes.lname}</td>
                <td>{authes.email}</td>
                <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(authes.id)}
                    >
                      Delete
                    </button><t></t>
                    <button type="button" onClick={() => openEditModal(authes)} className="btn btn-primary ms-4"  data-bs-toggle="modal" data-bs-target="#myModal">
                        Edit
                    </button>
                     <button
                        className={`btn ms-2 ${authes.blocked ? 'btn-success' : 'btn-warning'}`}
                        onClick={() => toggleBlockStatus(authes)}
                        >
                         {authes.blocked ? 'Unblock' : 'Block'}
                    </button>
                </td>
            </tr>
            ))
        ) : (
            <tr>
                <td colSpan="5">No contacts found</td>
            </tr>
        )}
    </tbody>
  </table>
  </div>

  <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h4 className="modal-title">Modal Heading</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        {/* Modal body */}
        <div className="modal-body">
        <form onSubmit={handleUpdate}>
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" id="fname" name="fname" value={editData.fname} onChange={handleChange} 
                 className="form-control border-0 bg-light px-4" placeholder="Your Name"  style={{height: 55}} />
              </div>
              <div className="col-md-6">
                <input type="text" id="lname" name="lname" value={editData.lname} onChange={handleChange} className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{height: 55}} />
              </div>
              <div className="col-12">
                <input type="email" id="email" name="email" value={editData.email} onChange={handleChange}   className="form-control border-0 bg-light px-4" placeholder="Subject" style={{height: 55}} />
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Update User</button>
              </div>
            </div>
          </form>
        </div>
        {/* Modal footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

   <Footer/>
   </>
  )
}

export default Manageuser
