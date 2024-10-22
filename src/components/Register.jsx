// Filename - Register.js

import React, { useState } from 'react';
import '../App.css'; // Make sure to import the CSS

const Register = () => {
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email,  password }),
            });

            if (response.ok) {
                setMessage('Registration successful!');
            } else {
                const error = await response.text();
                setMessage(error);
            }
        } catch (error) {
            setMessage('Registration failed. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2>Register on our page</h2>
            <form onSubmit={handleRegister}>
                <p> Provide an email:</p>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            <p> Provide an password:</p>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            {message && <p className={message.includes('successful') ? 'success-message' : ''}>{message}</p>}
        </div>
    );
};

export default Register;
