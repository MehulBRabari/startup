import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { toast } from 'react-toastify';
import axios from 'axios';

const Requestdata = () => {
    const [service,setService] = useState([]);

useEffect(() => {
   fetchService();
}, []);

const fetchService = async () => {
  try {
      const res = await axios("http://localhost:5000/service");
      setService(res.data)
  }
  catch(error)  {
    console.log("Field of data fetching",error);
    toast("Data Not fetch");
  }
}

const [editData,setEditData] = useState({
    id:'',
    name:'',
    email:'',
    service:'',
    message:'',
});

const handleChange = (e) => {
 const {name,value} = e.target;
 setEditData ({ ...editData,[name]: value })
}
const openEditModal = (data) => {
    setEditData(data);
    const model = new bootstrap.Model(document.getElementById("myModal"));
    model.show();
}

const handleUpdate = async (e) => {
    e.preventDefault();
 try {
     const res = await axios.put(`http://localhost:5000/service/${editData.id}`, editData);
    if(res.status === 200) {
        toast.success("Data Update succesfully");
    }
 }
 catch(error) {
    console.log("Data not update",error);
    toast.error("Data Not updated",error);
 }
}

const handleDelete = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:5000/service/${id}`);
        toast.success("Data Deleted"); 
        fetchService();      
    }
    catch(error) {
        console.log("Data not deleted",error);
        toast.error("Data not deleted");
    }
}

  return (
   <>
   <Navbar title={"Requiest Data"} breadcrumb={"Requiest Data"} />
   <div className='container'>
    <h2>Striped Rows</h2>
  <p>The .table-striped class adds zebra-stripes to a table:</p>            
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Service</th>
        <th>Message</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
         {service.length > 0 ? (
          service.map((services) => (
            <tr key={services.id}>
            <td>{services.name}</td> 
            <td>{services.email}</td> 
            <td>{services.service}</td> 
            <td>{services.message}</td>
            <td>
            <button className='btn btn-danger btn-sm me-2'onClick={() => handleDelete(services.id)}>
                Delete
            </button>
           <button type="button" onClick={() => openEditModal(services)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                Edit
            </button>
            </td>
            </tr>
        ))
        ):(
        <tr>
            <td>No Contact Found</td>
        </tr>
        )}
    </tbody>
  </table>
  </div>

<div>
  <div className="container mt-3">
    {/* <h3>Modal Example</h3>
    <p>Click on the button to open the modal.</p> */}
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
            <form onSubmit={handleUpdate} >
              <div className="row g-3">
                <div className="col-xl-12">
                  <input type="text" name='name' value={editData.name} onChange={handleChange} id='name' className="form-control bg-light border-0" placeholder="Your Name" style={{height: 55}} />
                </div>
                <div className="col-12">
                  <input type="email" name='email' value={editData.email} onChange={handleChange} id='email' className="form-control bg-light border-0" placeholder="Your Email" style={{height: 55}} />
                </div>
                <div className="col-12">
                  <select name='service' value={editData.service} onChange={handleChange} id='service' className="form-select bg-light border-0" style={{height: 55}}>
                    <option selected>Select A Service</option>
                    <option value={1}>Service 1</option>
                    <option value={2}>Service 2</option>
                    <option value={3}>Service 3</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea name='message' value={editData.message}  id='message' className="form-control bg-light border-0" rows={3} placeholder="Message"  />
                </div>
                <div className="col-12">
                  <button className="btn btn-dark w-100 py-3" type="submit">
                    Request A Quote
                  </button>
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

  <Footer/>
   </>
  )
}

export default Requestdata
