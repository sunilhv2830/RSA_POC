import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'


function Dashboard() {

    let history = useHistory();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3002/users");
        //await : it will wait until the requesting is completed until it gets response
        setUsers(result.data);
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadUsers();
        history.push('/')
    }

    return (
        <div className="container mt-2">
            <table className="table border shadow">
                <thead className="table-dark ">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Age</th>
                        <th scope="col">Salary</th>
                        <th></th><th></th><th></th>                       
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope="row">{index += 1}</th>
                            <td key={user.id}>{user.firstname}</td>
                            <td key={user.id}>{user.lastname}</td>
                            <td>{user.username}</td>
                            <td>{user.dob}</td>
                            <td>{user.age}</td>
                            <td>{user.salary}</td>

                            <td ><Link to={`/users/edit/${user.id}`} className="fa fa-edit" style={{ color: 'green' }}></Link> </td>
                            <td><Link to="/users/delete" className="fa fa-trash"
                                style={{ color: 'red' }}
                                onClick={() => deleteUser(user.id)}></Link></td>
                            <td><Link to={`/users/view/${user.id}`} className="fa fa-eye" ></Link></td>

                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;
