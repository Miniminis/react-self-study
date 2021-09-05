import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function App() {
  const [inputs, setInputs] = useState({
    username : '',
    email : '' 
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);   //굳이 리렌더링할 필요없는 값
  
  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    };

    //users.push(user);     //기존배열에 push() 하여 요소를 단순히 추가하는 방식으로는 동작하지 않는다(업데이트 되지 않음). 반드시 기존 배열을 복사한 뒤, 새로운 요소를 추가한 새로운 배열을 만들어주어야 한다. 
    // setUsers([...users, user]);   //방법1. 기존배열을 스프레드 연산자로 복사한 뒤, 새로운 user 객체 추가한 새로운 배열 만들기
    setUsers(users.concat(user));    //방법2. concat 연산자를 사용하여 기존 배열 + 새로운 요소 = 새로운 배열 만들기
    
    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));    //삭제하기 버튼 click 하지 않은 요소들만 새로 filter 통과하여 새로운 배열이 됨
  }

  return (
      <>
        <CreateUser 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate} />
        <UserList 
          users={users}
          onRemove={onRemove}/>
      </>
  );
}

export default App;
