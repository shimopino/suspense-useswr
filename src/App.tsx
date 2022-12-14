import { useEffect } from "react";
import { searchUsers } from "./api/hooks/useUsersSearch";
import { Card } from "./components/Card";
import { RealTime } from "./components/RealTime";
import { Users } from "./components/Users";
import { UsersSearch } from "./components/UsersSearch";

function App() {
  useEffect(() => {
    const call = async () => {
      const response = await searchUsers({ minAge: 30, maxAge: 50 });
      console.log(response);
    };

    call();
  }, []);

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
      <Card>
        <h2>動的に検索を行う場合（onChange）</h2>
        <UsersSearch />
      </Card>
    </>
  );
}

export default App;
