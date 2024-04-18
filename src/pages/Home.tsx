import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Welcome to the Ticketing System</h1>
            <p>Your one-stop solution to manage and track issues efficiently.</p>
            <div>
                <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link>
            </div>
        </div>
    );
};

export default Home;
