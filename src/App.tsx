import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div className="App">検証用</div>;
}

export default App;
