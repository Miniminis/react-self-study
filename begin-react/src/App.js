import React from "react";
import Hello from './Hello';
import './App.css';

function App() {
  const name = '홍길동';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding : '1rem'
  };

  return (
    <>
      <div className="gray-box">
        {/* 주석은 이렇게 씁니다. */}
        <Hello 
            //여기에서는 주석을 이렇게 써요!
        />
        <Hello />
      </div>

      <br></br>
      <hr></hr>

      <span style={style}>{name}</span>
    </>
  );
}

export default App;
