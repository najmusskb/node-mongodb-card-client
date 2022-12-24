import React, { useState } from 'react';

const AddUsers = () => {

    const [user, setUser] = useState({});


    const HandleAddUser = event => {
        event.preventDefault();
        console.log(user)
    }

    const HandleInputBlur = event => {
        const value = event.target.value;
        const filed = event.target.name;
        const newUser = { ...user };
        newUser[filed] = value;
        setUser(newUser)

    }
    return (
        <div>

            <h2>please add a new users  </h2>



            <form onSubmit={HandleAddUser}>
                <input onBlur={HandleInputBlur} type="text" name='name' placeholder='Name' /> <br /> <br />
                <input onBlur={HandleInputBlur} type="email" name='email' placeholder='Enter Email' /> <br /><br />
                <input onBlur={HandleInputBlur} type="text" name='address' placeholder='address' /> <br /><br />
                <button type="submit">Add User</button>
            </form>


        </div>
    );
};

export default AddUsers;