import React, { useReducer, useMemo, createContext } from "react";
import CreateUser from "./users/CreateUser";
import UserList from "./users/UserList";
import produce from "immer";


const initialState = {
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


function reducer(state, action) {
  switch(action.type) {
    case 'CREATE_USER':
      return produce(state, draft => {
        draft.users.push(action.user)
      });       
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });       
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
    default:
      return new Error('Unhandled Action');      
  }
};

export const UserDispatch = createContext(null);


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;

  const activeUserCnt = useMemo(()=> onCountActiveUsers(users), [users]);

  return (
      <UserDispatch.Provider value = { dispatch }>
        <CreateUser />
        <UserList users={users} />
        <div>활성사용자의 수 : {activeUserCnt}</div>
      </UserDispatch.Provider>
  );
}

export default App;
