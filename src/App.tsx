import { useRealTime } from "./api/hooks/useRealTime";
import { useUsers } from "./api/hooks/useUsers";
import { RealTime } from "./components/RealTime";
import { Users } from "./components/Users";

function App() {
  return (
    <>
      <h1>複数のデータをそのまま表示する場合</h1>
      <RealTime />
      <Users />
    </>
  );
}

export default App;
