import React from "react";
import Hello from './Hello';
import Wrapper from "./Warpper";

function App() {
  return (
    <Wrapper>
      <Hello name="도우너" color="red"></Hello>
      <Hello></Hello>
    </Wrapper>
  );
}

export default App;
