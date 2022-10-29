import { useRealTime } from "./api/hooks/useRealTime";
import { useUsers } from "./api/hooks/useUsers";

function App() {
  const { users, mutate: usersMutate } = useUsers();
  const { current, mutate: currentMurate } = useRealTime();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    usersMutate();
    currentMurate();
  };

  return (
    <>
      <h1>複数のデータをそのまま表示する場合</h1>
      <button onClick={onClick}>Reload</button>
      <div>
        <span>{current}</span>
      </div>
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
