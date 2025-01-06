import initialFriends from "./data/initialFriends";
import FriendList from "./components/FriendList";

function App() {
  return (
    <div className="min-h-[66vh] grid grid-cols-[34rem_44rem] gap-x-[4rem] items-start">
      <div>
        <FriendList friends={initialFriends} />
      </div>
    </div>
  );
}

export default App;
