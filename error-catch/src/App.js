import './App.css';
import ErrorBoundary from './users/ErrorBoundary';
import User from './users/User';

function App() {
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  ) 
}

export default App;
