import { useState } from "react";
import initialFriends from "./data/initialFriends";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  return (
    <div className="min-h-[66vh] grid grid-cols-[34rem_44rem] gap-x-[4rem] items-start">
      <div>
        <FriendList friends={friends} onSelected={handleSelectedFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <button
          className="bg-[var(--color-medium)] text-[#393f44] py-[0.8rem] px-[1.2rem] border-none rounded-[7px] font-bold 
      cursor-pointer transition duration-300 hover:bg-[var(--color-dark)] hover:text-[#dde3e7] float-right mr-[1.2rem]"
          onClick={handleShowAddFriend}
        >
          {showAddFriend ? "Tutup" : "Tambah Teman"}
        </button>
      </div>
      {selectedFriend && <FormSplitBill />}
    </div>
  );
}

export default App;
