import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size='large' onClick={() => console.log('클릭됐어요!')}>BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size='small'>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size='large' color='pink'>BUTTON</Button>
        <Button color='pink'>BUTTON</Button>
        <Button size='small' color='pink'>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size='large' color='gray'>BUTTON</Button>
        <Button color='gray'>BUTTON</Button>
        <Button size='small' color='gray'>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size='large' color='gray' outline='true'>BUTTON</Button>
        <Button color='blue' outline='true'>BUTTON</Button>
        <Button size='small' color='pink' outline='true'>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size='large' color='gray' fullWidth='true'>BUTTON</Button>
        <Button color='blue' fullWidth='true'>BUTTON</Button>
        <Button size='small' color='pink' fullWidth='true'>BUTTON</Button>
      </div>
    </div>
  );
}

export default App;
