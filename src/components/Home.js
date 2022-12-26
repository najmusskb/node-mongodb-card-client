import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {


    const users = useLoaderData();
    const handleDelete = user => {


        const agree = window.confirm(`are you sure you want to delete ${user.name}`)
        console.log(agree)
        if (agree) {
            console.log('deleting user', user)
        }

    }

    return (
        <div>
            <h2>This Is Users {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name}{user.email}
                        <button onClick={() => handleDelete(user._id)}>x</button> </p>)
                }
            </div>


        </div>
    );
};

export default Home;
