import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        'https://687b3f4ab4bc7cfbda8520a0.mockapi.io/CRUD',
        { name, email },
        { headers: { 'Access-Control-Allow-Origin': '*' } }
      )
      .then(() => {
        navigate('/read');
      });
  };

  return (
    <div className='d-flex flex-column align-items-start'>
      <h2 className='mb-1'>Create User</h2>
      <h2 className='mb-4 text-muted' style={{ fontSize: '18px' }}>
        Fill the details below to create a user profile
      </h2>
      <form onSubmit={handleSubmit} className='w-100'>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>Name</label>
          <input
            id='name'
            type='text'
            className='form-control'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input
            id='email'
            type='email'
            className='form-control'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary me-2'>Create</button>
        <button type='button' className='btn btn-secondary' onClick={() => navigate('/read')}>
          View All Users
        </button>
      </form>
    </div>
  );
};

export default Create;
