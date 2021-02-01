import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Dashboard() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users');
        //it will wait until the requesting is completed until it gets response
        setUsers(result.data);
    }

    return (
        <div className="container mt-2">
            <table class="table border shadow">
                <thead class="table-dark ">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td ><Link to="/user/edit" class="fa fa-edit" style={{ color: 'green' }}></Link> </td>
                            <td><Link to="/user/delete" class="fa fa-trash" style={{ color: 'red' }}></Link></td>
                            <td><Link to="/user/view" class="fa fa-eye" ></Link></td>

                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;
