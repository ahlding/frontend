import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function EditUser() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/api/$(id)/edit', inputs).then(function (response) {
      console.log(response.data);
      navigate('/');
    });
  };
  return (
    <div>
      <h1>Edit Users</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input value={inputs.name} type="text" name="name" onChange={handleChange} />
        <br />
        <label>Email: </label>
        <input value={inputs.email} type="text" name="email" onChange={handleChange} />
        <br />
        <label>Mobile: </label>
        <input value={inputs.mobile} type="text"  name="mobile" onChange={handleChange} />
        <br />
        <button>Save</button>
      </form>
    </div>
  );
}