import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { LOAD_USER } from '../GraphQL/Queries';

function Login() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [ getUser, {error, loading, data}] = useLazyQuery(
        LOAD_USER,
        {variables: {
            username: username,
            password: password,
        }}
        )
    
    useEffect(() => {
        console.log(error);
        if (!loading) console.log(data)
    }, [error, loading, data])

    return (
        <div>
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
            <button onClick={() => getUser()}>Log In</button>
        </div>
    )
}

export default Login
