import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AddUser() {

    let history = useHistory();
    const [user, setUser] = useState({
        firstname:'',
        username:'',
        dob:'',
        age:'',
        salary:''
      
    });

    const { firstname, lastname, username, dob, age,salary } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });//... merges previous data with new data
    }

    const submitHandler =  e => {
        e.preventDefault();
       console.log(user);
       axios.post('http://localhost:3002/users',user)
       .then(response => {
        history.push('/')
        console.log(response) 
       })
       .catch(error => {
           console.log(error)
       })
    };



    return (
        <div className="container">
            <h1 className="App">Add User</h1>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label  className="form-label">First Name</label>
                    <input type="text" className="form-control" 
                        placeholder="Enter First Name"
                        name="firstname" value={firstname}
                        onChange={e => onInputChange(e)} />
                </div>

                <div className="mb-3">
                    <label  className="form-label">Last Name</label>
                    <input type="text" className="form-control" 
                        placeholder="Enter Last Name"
                        name="lastname" value={lastname}
                        onChange={e => onInputChange(e)} />
                </div>

                <div className="mb-3">
                    <label  className="form-label">User Name</label>
                    <input type="text" className="form-control"  placeholder="Enter User Name"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)} />
                </div>

                <div className="mb-3">
                    <label  className="form-label">DOB</label>
                    <input type="date" className="form-control"  placeholder="Enter DOB"
                        name="dob" value={dob}
                        onChange={e => onInputChange(e)} />
                </div>

                <div className="mb-3">
                    <label  className="form-label">Age</label>
                    <input type="text" className="form-control"  placeholder="Enter Age"
                        name="age"
                        value={age}
                        onChange={e => onInputChange(e)} />
                </div>

                

                <div className="mb-3">
                    <label  className="form-label">Salary</label>
                    <input type="text" className="form-control" placeholder="Enter Salary"
                        name="salary" value={salary}
                        onChange={e => onInputChange(e)} />
                </div>


                <button className="btn btn-block btn-primary" type="submit">Add User</button>
            </form>
        </div>
    )
}

export default AddUser
