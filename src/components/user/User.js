import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';//to access the url of perticual id

function User() {


    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        age: '',
        salary: ''

    });

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(res.data);
    };

    return (
        <div className="container">

            <h2 class="display-4">{id}</h2>
            <ul class="list-group">             
                <li class="list-group-item">UserName : {user.username}</li>
                <li class="list-group-item">Age : {user.age}</li>
                <li class="list-group-item">Email : {user.email}</li>
                <li class="list-group-item">Salary : {user.salary}</li>
            </ul>

        </div>
    )
}

export default User;
