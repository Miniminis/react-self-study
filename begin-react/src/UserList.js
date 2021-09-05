import React from "react";

function User({ user, onRemove, onToggle }) {
    const {username, email, id, active} = user;
    const style = {
        color : active ? 'green' : 'black',
        cursor : 'pointer'
    };

    return (
        <div>
            <b style={style}
                onClick={() => onToggle(id)}>
                {id}) {username}
            </b>
            (<span>{email}</span>) 
            <button onClick={() => onRemove(id)}>삭제하기</button>
        </div>
    );
}

function UserList( {users, onRemove, onToggle}) {
    return (
        <div>
            {
                users.map(
                    (user, index) => (<User 
                                        user={user} 
                                        key={user.id}
                                        onRemove={onRemove}
                                        onToggle={onToggle} />)
                )                
            }
        </div>
    );
}

export default UserList;