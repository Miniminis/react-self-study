import React, { useRef, useReducer, useState, useMemo, useCallback } from "react";
import CreateUser from "./users/CreateUser";
import UserList from "./users/UserList";


//상태값 한번에 초기화 
const initialState = {
  inputs: {
    username : '',
    email : '' 
  },
  users: [
      {
          id: 1,
          username : 'flash',
          email: 'flash@gmail.com',
          active : true
      },
      {
          id: 2,
          username : 'beak',
          email: 'beak@gmail.com',
          active : false
      },
      {
          id: 3,
          username : 'black',
          email: 'black@gmail.com',
          active : true
      }
  ]
};


function onCountActiveUsers (users) {
  console.log('active user cnt!');
  return users.filter(user => user.active).length;
};


//엑션별 상태관리 함수
function reducer(state, action) {
  switch(action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name] : action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(
          user => user.id === action.id
          ? {...user, active: !user.active} 
          : user
        )
      }
    default:
      return new Error('Unhandled Action');      
  }
};


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const {username, email} = state.inputs;
  const {users} = state;
  const nextId = useRef(4);

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name, 
      value
    });
  }, []);

  
  const onCreate = useCallback(() => {
    dispatch({
      type : 'CREATE_USER',
      user : {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);


  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);


  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  }, []);

  const activeUserCnt = useMemo(()=> onCountActiveUsers(users), [users]);

  return (
      <>
        <CreateUser 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate} />
        <UserList 
          users={users}
          onRemove={onRemove}
          onToggle={onToggle}/>
        <div>활성사용자의 수 : {activeUserCnt}</div>
      </>
  );
}

export default App;
