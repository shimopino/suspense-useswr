import { useEffect, useState } from "react";
import { client } from "./api/client";
import { useUsers } from "./api/hooks/useUsers";

function App() {
  const { users, mutate } = useUsers();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    mutate();
  };

  return (
    <>
      <h1>複数のデータをそのまま表示する場合</h1>
      <button onClick={onClick}>Reload</button>
      {users?.map((user) => {
        return (
          <div key={user.id}>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.age}</span>
          </div>
        );
      })}
    </>
  );
}

export default App;
