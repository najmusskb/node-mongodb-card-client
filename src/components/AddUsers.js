import React, { useState } from 'react';
const AddUsers = () => {
    const [user, setUser] = useState({});
    const HandleAddUser = event => {
        event.preventDefault();
        console.log(user)



        // ------------------------------------------------------
        //  data ke server e pathanor fetch rule

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    alert('Users Added Successfully');
                    event.target.reset();
                }
            })
        // ---------------------------------------------------------


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
                <input onBlur={HandleInputBlur} type="text" name='name' placeholder='Name' required /> <br /> <br />
                <input onBlur={HandleInputBlur} type="email" name='email' placeholder='Enter Email' required /> <br /><br />
                <input onBlur={HandleInputBlur} type="text" name='address' placeholder='address' required /> <br /><br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};
export default AddUsers;