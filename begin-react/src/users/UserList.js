import React, {useEffect} from "react";

const User = React.memo(
    function User({ user, onRemove, onToggle }) {
        const {username, email, id, active} = user;
        const style = {
            color : active ? 'green' : 'black',
            cursor : 'pointer'
        };
        useEffect (() => {
            // console.log('값이 바뀐 뒤에 호출됨')
            // console.log(user);
            return () => {
                // console.log('값이 바뀌기 전에 호출됨')
                // console.log(user);
            }
        }, [user]);
    
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
);

function UserList({ users, onRemove, onToggle }) {
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

export default React.memo(UserList);