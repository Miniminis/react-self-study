import React, {useEffect} from "react";

function User({ user, onRemove, onToggle }) {
    const {username, email, id, active} = user;
    const style = {
        color : active ? 'green' : 'black',
        cursor : 'pointer'
    };
    useEffect(() => {
        console.log('컴포넌트 화면에 나타남');
        //props -> state
        //setInterval, setTimeout
        //Rest API
        //D3 video.js

        return () => {
            console.log('컴포넌트 화면에서 사라짐');
            //clearInterval, clearTimeout
            //라이브러리 인스턴스 제거 
        };
    }, []);

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