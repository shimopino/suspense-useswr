import { Card } from "./components/Card";
import { RealTime } from "./components/RealTime";
import { Users } from "./components/Users";

function App() {
  return (
    <>
      <h1>複数のデータをそのまま表示する場合</h1>
      <Card>
        <h2>同じAPIに対して、同じキーを設定している場合</h2>
        <RealTime />
        <RealTime />
      </Card>
      <Card>
        <h2>同じAPIに対して、異なるキーを設定している場合</h2>
        <RealTime serializedKey="another" />
      </Card>
      <Card>
        <h2>静的なデータを取得している場合</h2>
        <Users />
      </Card>
    </>
  );
}

export default App;
