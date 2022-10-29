import { useEffect, useState } from "react";
import { client } from "./api/useUsers";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    client("/users", { method: "GET" }).then((res) => console.log(res.data));
  }, []);

  return <div className="App">検証用</div>;
}

export default App;
