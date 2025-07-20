import axios from 'axios';
import { useState, useEffect } from 'react';
import './read.css';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios.get('https://687b3f4ab4bc7cfbda8520a0.mockapi.io/CRUD')
      .then((res) => {
        setData(res.data);
      });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);     
    localStorage.setItem("email", email);
  }

  function handleDelete(id) {
    axios.delete(`https://687b3f4ab4bc7cfbda8520a0.mockapi.io/CRUD/${id}`)
      .then(() => {
        getData();
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="header-container">
        <h2 className="title">All Users</h2>
        <Link to="/">
          <button className="btn-create">Create User</button>
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <td>{eachData.id}</td>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to="/update">
                  <button className="edit-btn" onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.email)}>Edit</button>
                </Link>
                <button className="delete-btn" onClick={() => handleDelete(eachData.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
