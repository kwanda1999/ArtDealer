// Database: SQLite
// Server: Express.js

const express = require('express'); // Import the express framework
const app = express(); // Create an instance of express
const cors = require('cors'); // Import the cors middleware for cross-origin requests
const PORT = process.env.PORT || 3000; // Set the port to the environment variable or default to 3000
const db = require('./db'); // Import the database connection from db.js

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Function to register a new user in the database
app.post('/register', (req, res) => {
    const { name, surname, email, password } = req.body; // Destructure user data from the request body

    // First, check if the email already exists
    db.get('SELECT * FROM Users WHERE Email = ?', [email], (err, existingUser ) => {
        if (err) {
            console.error(err); // Log the error
            return res.status(500).json({ error: err.message }); // Send error response if query fails
        }

        if (existingUser ) {
            return res.status(400).json({ error: 'Email already exists' }); // Send error response if email already exists
        }

        // SQL command to insert a new user into the Users table
        db.run('INSERT INTO Users (Name, Surname, Email, Password) VALUES (?, ?, ?, ?)', 
            [name, surname, email, password], // Values to be inserted
            function(err) {
                if (err) {
                    console.error(err); // Log the error
                    return res.status(500).json({ error: err.message }); // Send error response if insertion fails
                }
                res.status(201).send('User  has registered'); // Send success response
                console.log('User  has registered');
            }
        );
    });
});

// Function to login a user by checking credentials
app.post('/login', (req, res) => {
    const { email, password } = req.body; // Destructure user data from the request body

    // SQL command to fetch user by email
    db.get('SELECT * FROM Users WHERE Email = ?', [email], (err, storedUser ) => {
        if (err) {
            console.error(err); // Log the error
            return res.status(500).json({ error: err.message }); // Send error response if query fails
        }

        // Check if the user exists and the password matches
        if (storedUser  && storedUser .Password === password) {
            return res.status(200).send('Login successful'); // Send success response
        } else {
            return res.status(401).send('Invalid information'); // Send unauthorized response
        }
    });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log the running server message
});