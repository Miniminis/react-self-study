import './App.css';
import CheckBox from './components/CheckBox';
import { useState } from 'react';

function App() {
  const [checked, setChecked] = useState(false);
  const onChange = e => {
    setChecked(e.target.checked)
  };
  return (
    <div>
      <CheckBox
        onChange={onChange}
        checked={checked}>
        다음 약관에 모두 동의합니다.
      </CheckBox>
      <p>
        <b>check: </b>
        {checked ? 'true' : 'false'}
      </p>
    </div>
  );
}

export default App;
