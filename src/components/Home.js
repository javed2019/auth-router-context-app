import React, { useContext } from 'react';
import { AuthContext } from './UserContext/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <p>This is HOME for {user.email}</p>
        </div>
    );
};

export default Home;