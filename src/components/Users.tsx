import { useUsers } from "../api/hooks/useUsers";

export const Users = () => {
  const { users, mutate } = useUsers();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    mutate();
  };

  return (
    <>
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
};
