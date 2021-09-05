import React from "react";

function User({ user }) {
    return (
        <div>
            <b>{user.username}(<span>{user.email}</span>)</b>
            <h4>{user.id}</h4>
        </div>
    );
}

function UserList( {users}) {
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