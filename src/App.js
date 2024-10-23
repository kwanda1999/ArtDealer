// Filename - App.js

import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import TestView from "./components/TestView";
import Login from "./components/Login"; 
import Register from "./components/Register"; 
import Navigation from "./components/Navigation"; 



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/testview" element={<TestView />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/navigation" element={<Navigation />} />
            </Routes>
        </Router>
    );
    
}

export default App;
