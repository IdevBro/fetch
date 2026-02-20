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
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
