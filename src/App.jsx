import { useState, useEffect } from "react";

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/users";

    fetch(URL)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {info.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </div>
  );
}

export default App;
