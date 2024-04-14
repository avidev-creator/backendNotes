import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  {
    /* async function getJokes() {
  //  const response = await fetch("/api/jokes");
  //  const data = await response.json();
  //    setJokes(data);
  //  }
 */
  }

  {
    /* How to do the same thing with Axios */
  }

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => console.log(err));
  });

  // This will give an infinte loop of network.

  // To fix that use below --

  {
    /* const fetchHandler = () => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => console.log(err));
  };
*/
  }

  return (
    <>
      <div>
        <h1>Jokes.....</h1>
        <div>
          {jokes.map((joke) => (
            <div key={joke.id}>
              <h3>Setup : {joke.setup}</h3>
              <p>Delivery : {joke.delivery}</p>
            </div>
          ))}
        </div>
        <button onClick={fetchHandler}>Fetch Jokes</button>
      </div>
    </>
  );
}

export default App;
