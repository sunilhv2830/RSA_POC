import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function EditUser() {

    let history = useHistory();
    const { id } = useParams();//gets the id from the url parameter

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        age: '',
        salary: ''

    });

    const { name, username, email, age, salary } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });//... merges previous data with new data
    }

    useEffect(() => {
        loadUser();
    }, [])


    const submitHandler = e => {
        e.preventDefault();
        console.log(user);
        axios.put(`http://localhost:3002/users/${id}`, user)
            .then(response => {
                history.push('/')//using history we can navigate to different page
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data);
    }
    return (
        <div>
            <h1>Edit User</h1>
            <div className="container">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control"
                            placeholder="Enter Name"
                            name="name" value={name}
                            onChange={e => onInputChange(e)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input type="text" className="form-control"
                            placeholder="Enter User Name"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="text" className="form-control"
                            placeholder="Enter Age"
                            name="age"
                            value={age}
                            onChange={e => onInputChange(e)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control"
                            placeholder="Enter Email Address"
                            name="email" value={email}
                            onChange={e => onInputChange(e)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Salary</label>
                        <input type="text" className="form-control" placeholder="Enter Salary"
                            name="salary" value={salary}
                            onChange={e => onInputChange(e)} />
                    </div>


                    <button className="btn btn-block btn-warning" type="submit">Update User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser
