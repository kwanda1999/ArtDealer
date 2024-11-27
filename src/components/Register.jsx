// Filename - Register.js

import React, { useState, useEffect } from 'react'; // Import useEffect for Google login handling
import { useGoogleLogin, googleLogout } from '@react-oauth/google'; // Import Google hooks
import axios from 'axios'; // Import axios for API calls
import { GoogleOAuthProvider } from "@react-oauth/google"
import '../styles/logon.css'; // Adjust the path as necessary

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [profile, setProfile] = useState(null); // State to hold user profile information
    const [user, setUser] = useState(null); // State to hold Google user information

    // Google login function
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
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

    const handleGoogleRegister = async (googleUser) => {
        // Example: Register the Google user on your backend
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Origin": "*",
                    'Accept': 'application/json',

                },
                body: JSON.stringify({
                    name: googleUser.given_name,
                    surname: googleUser.family_name,
                    email: googleUser.email,
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

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, surname, email, password })
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

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (
        <div className="login-cover">
        <div className="container">
            <h2>Create Your Account</h2>
            <form onSubmit={handleRegister}>
            <div className='fields'>Name</div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <div className='fields'>Surname</div>
                <input
                    type="text"
                    placeholder="Last Name"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                />
                <div className='fields'>Email</div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className='fields'>Password</div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="login-button">Register</button>
            </form>

            {/* Google Login Button */}
            <div>
            <div className='fields'>Or</div>
                {profile ? (
                    <div>
                        <img src={profile.picture} alt="user image" />
                        <h3>User Logged in</h3>
                        <p>Name: {profile.name}</p>
                        <p>Email Address: {profile.email}</p>
                        <button onClick={logOut}>Log out</button>
                    </div>
                ) : (
                    <button className="login-button" onClick={() => login()}>Sign in with Google </button>
                )}
            </div>

            {message && <p className={message.includes('successful') ? 'success-message' : ''}>{message}</p>}
            
        </div>
        </div>
    );
};

export default Register;
