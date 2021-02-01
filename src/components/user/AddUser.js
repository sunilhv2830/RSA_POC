import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddUser() {

    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        city: "",
    });

    const { name, username, email, phone, city } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })//... merges previous data with new data
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post('https://localhost:3002/users', user);
        history.push("/");
    };



    return (
        <div className="container">
            <h1 class="App">Add User</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div class="mb-3">
                    <label for="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName"
                        placeholder="Enter Name"
                        name="name" value={name}
                        onChange={e => onInputChange(e)} />
                </div>

                <div class="mb-3">
                    <label for="inputUserName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="inputUserName" placeholder="Enter User Name"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)} />
                </div>

                <div class="mb-3">
                    <label for="inputName" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Enter Phone Number"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)} />
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Email Address"
                        name="email" value={email}
                        onChange={e => onInputChange(e)} />
                </div>

                <div class="mb-3">
                    <label for="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress" placeholder="Enter City"
                        name="city"
                        value={city}
                        onChange={e => onInputChange(e)} />
                </div>

                <button className="btn btn-block btn-primary" type="submit">Add User</button>
            </form>
        </div>
    )
}

export default AddUser
