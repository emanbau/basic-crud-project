import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

function Login() {
    
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <input 
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    )
}

export default Login
