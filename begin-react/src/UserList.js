import React from "react";

function User({ user }) {
    return (
        <div>
            <b>{user.username}(<span>{user.email}</span>)</b>
            <h4>{user.id}</h4>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username : 'flash',
            email: 'flash@gmail.com'
        },
        {
            id: 2,
            username : 'beak',
            email: 'beak@gmail.com'
        },
        {
            id: 3,
            username : 'black',
            email: 'black@gmail.com'
        }
    ];

    return (
        <div>
            {
                users.map(
                    (user, index) => (<User user={user} key={user.id}/>)
                )                
            }
        </div>
    );
}

export default UserList;