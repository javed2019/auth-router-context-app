import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../components/UserContext/UserContext';

const Header = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
            <Link to='/' className="btn btn-ghost normal-case text-xl">JavedAuth</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            {user?.email && <span>Welcome, {user?.email}</span>}
            <button className="btn btn-warning">Sign Out</button>
                
            </div>
        </div>
    );
};

export default Header;