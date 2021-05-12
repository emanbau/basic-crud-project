import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../GraphQL/Mutations';

function Signup() {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [createUser, { error, loading, data }] = useMutation(SIGN_UP);
    const signUp = async () => {
        try {
            await createUser({
                variables: {
                    name: name,
                    username: username,
                    password: password
                }
            });
        } catch (e) {
            console.error(e);
        }

        if (error) {
            console.log(error);
        }

    };

    useEffect(() => {
        if (!loading) console.log(data);
    }, [loading, data])

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
            <button onClick={signUp}>Create Account</button>
        </div>
    )
}

export default Signup
