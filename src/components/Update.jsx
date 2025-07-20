import React, { useState, useEffect } from 'react';
import "./update.css"; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));  
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://687b3f4ab4bc7cfbda8520a0.mockapi.io/CRUD/${id}`, {
      name,
      email,
    }).then(() => {
      navigate('/read'); 
    });
  };

  return (
    <>
      <h2>Update User</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">  
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="button-group">
  <button type="submit" className="btn btn-primary" onClick={handleUpdate}>
    Update
  </button>
  <button type="button" className="btn btn-secondary" onClick={() => navigate('/read')}>
    Cancel
  </button>
</div>

      </form>
    </>
  );
};

export default Update;
