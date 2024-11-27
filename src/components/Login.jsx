// Filename - Login.js

import React, { useState, useEffect } from 'react';
import { useGoogleLogin, googleLogout } from '@react-oauth/google'; // Import Google hooks
import axios from 'axios'; // Import axios for API calls
import '../styles/logon.css'; // Adjust the path as necessary


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [user, setUser ] = useState(null);
    const [profile, setProfile] = useState(null);

    // Google login function
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser (codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    });

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json',
                    },
                })
                .then((res) => {
                    setProfile(res.data);
                    // Handle the Google user registration here if needed
                    handleGoogleRegister(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    const handleGoogleRegister = async (googleUser ) => {
        // Example: Register the Google user on your backend
        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: googleUser .given_name,
                    surname: googleUser .family_name,
                    email: googleUser .email,
                    // You may choose not to require a password for Google signups
                    password: null,
                }),
            });

            if (response.ok) {
                setMessage('Google registration successful!');
            } else {
                const error = await response.text();
                setMessage(error);
            }
        } catch (error) {
            setMessage('Google registration failed. Please try again.');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                setMessage('Login successful!');
            } else {
                const error = await response.text();
                setMessage(error);
            }
        } catch (error) {
            setMessage('Login failed. Please try again.');
        }
    };

    const logOut = () => {
        googleLogout().then(() => {
            setProfile(null);
        });
    };

    return (
        <div className="login-cover">
        <div className="container">
        <div className="logo me-3"></div>
            <h2>Welcome</h2>
            <div className='subheading'>Enter your email and password to access your account</div>
            <form onSubmit={handleLogin}>
                <div className='fields'>Email</div>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className='fields'>Password</div>
                <input
                    type="password"
                    placeholder="*********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="login-button">Login</button>

                <div>
                    <div className='fields'>or</div>
                    {profile ? (
                        <div>
                            <img src={profile.picture} alt="user" />
                            <h3>User Logged in</h3>
                            <p>Name: {profile.name}</p>
                            <p>Email Address: {profile.email}</p>
                            <button onClick={logOut}>Log out</button>
                 </div>
            ) : (
                <button onClick={login} className='login-button'>Sign in with Google</button>
            )}
        </div>
    </form>
    {message && <p className={message.includes('successful') ? 'success-message' : ''}>{message}</p>}
</div>
</div>
    );
};

export default Login;