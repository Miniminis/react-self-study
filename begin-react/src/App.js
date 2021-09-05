import React, { useRef } from "react";
import UserList from "./UserList";

function App() {
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

  const nextId = useRef(4);   //굳이 리렌더링할 필요없는 값
  
  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  }

  return (
    <div onClick={onCreate()}>
      <UserList users={users}/>
    </div>
  );
}

export default App;
