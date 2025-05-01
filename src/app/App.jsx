import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import Header from '../components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header />
    <div id="root">
      <h1>Welcome to Post Scriptum</h1>
      <p>This is the home page of your digital legacy app.</p>

      <div className="card">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </div>

      <p className="read-the-docs">
        Click the link below to go to the Auth page.
      </p>

      <Link to="/auth">Go to Auth Page</Link>
      
      <Link to="/dashboard">Go to Dash</Link>

    </div>
    </>
  );
}

export default App;
