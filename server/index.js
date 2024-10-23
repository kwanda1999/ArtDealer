

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;


app.use(cors()); 
app.use(express.json()); 

const userData = {};


function storeUser(email , password) {
    userData[email] = { password }; 
}


function getUser(email) {
    return userData[email];
}


app.post('/signup', (req, res) => {
    const { name, surname, email, password } = req.body;
    storeUser( name, surname, email, password);
    res.status(201).send('User has registered');
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const storedUser = getUser(email);
    if (storedUser && storedUser.password === password) {
        return res.status(200).send('Login successful');
    } else {
        return res.status(401).send('Invalid information');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
