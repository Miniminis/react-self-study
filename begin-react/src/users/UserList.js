import React, {useEffect, useContext} from "react";
import { UserDispatch } from "../App";

const User = React.memo(
    function User({ user }) {
        const {username, email, id, active} = user;
        const style = {
            color : active ? 'green' : 'black',
            cursor : 'pointer'
        };
        const dispatch = useContext(UserDispatch);

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
                    onClick={() => dispatch({
                        type : 'TOGGLE_USER',
                        id
                    })}>
                    {id}) {username}
                </b>
                (<span>{email}</span>) 
                <button onClick={() => dispatch({
                    type: 'REMOVE_USER',
                    id
                })}>삭제하기</button>
            </div>
        );
    }
);

function UserList({ users }) {
    return (
        <div>
            {
                users.map(
                    (user, index) => (<User 
                                        user={user} 
                                        key={user.id} />)
                )                
            }
        </div>
    );
}

export default React.memo(UserList);