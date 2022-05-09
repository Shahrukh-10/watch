import './App.css';
import { useState } from 'react';

function App() {
  let t = new Date().toLocaleTimeString();
  const [time, settime] = useState(t);
  const updateTime = () => {
    t = new Date().toLocaleTimeString();
    settime(t);
  }

  setInterval(updateTime,1000)
  return (
    <div className="App">
      {time}
    </div>
  );
}

export default App;
