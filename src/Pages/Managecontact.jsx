import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Topbar from "../Component/Topbar";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Managecontact = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch contact data on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  // GET: Fetch all contacts
  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/contacts");
      setContacts(res.data);
    } catch (error) {
      console.error("Failed to fetch contacts", error);
      toast.error("Failed to load contacts");
    }
  };

  const [editData, setEditData] = useState({
    id: "",
    name: "",
    email: "",
    subject: "",
    message: "",
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
      const res = await axios.put(`http://localhost:5000/contacts/${editData.id}`, editData);
      if (res.status === 200) {
        toast.success("Contact updated successfully");
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
      await axios.delete(`http://localhost:5000/contacts/${id}`);
      toast.success("Contact deleted");
      // Re-fetch updated contact list
      fetchContacts();
    } catch (error) {
      console.error("Failed to delete contact", error);
      toast.error("Failed to delete contact");
    }
  };

  return (
    <>
      <Topbar />
      <Navbar title="Manage Contact" breadcrumb="Manage Contact" />

      <div className="container mt-4">
        <h1>Manage Contact</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.subject}</td>
                  <td>{contact.message}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(contact.id)}
                    >
                      Delete
                    </button><t></t>
                    <button type="button" onClick={() => openEditModal(contact)} className="btn btn-primary ms-4"  data-bs-toggle="modal" data-bs-target="#myModal">
                        Edit
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

      {/* Model */}
     <div>
  <div className="container mt-3">
   
  </div>
  {/* The Modal */}
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
                <input type="text" id="name" name="name" value={editData.name} onChange={handleChange} 
                 className="form-control border-0 bg-light px-4" placeholder="Your Name"  style={{height: 55}} />
              </div>
              <div className="col-md-6">
                <input type="email" id="email" name="email" value={editData.email} onChange={handleChange} className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{height: 55}} />
              </div>
              <div className="col-12">
                <input type="text" id="subject" name="subject" value={editData.subject} onChange={handleChange}   className="form-control border-0 bg-light px-4" placeholder="Subject" style={{height: 55}} />
              </div>
              <div className="col-12">
                <textarea id="message" name="message" value={editData.message} onChange={handleChange}  className="form-control border-0 bg-light px-4 py-3" rows={4} placeholder="Message" defaultValue={""} />
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Update Message</button>
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
</div>



      <Footer />
    </>
  );
};

export default Managecontact;
