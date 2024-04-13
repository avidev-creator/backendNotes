import { useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  async function getJokes() {
    const response = await fetch("/api/jokes");
    const data = await response.json();
    setJokes(data);
  }

  return (
    <>
      <div>
        <h1>Jokes.....</h1>
        <button onClick={getJokes}>Get Jokes</button>
        <div>
          {jokes.map((joke) => (
            <div key={joke.id}>
              <p>Setup : {joke.setup}</p>
              <p>Delivery : {joke.delivery}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
