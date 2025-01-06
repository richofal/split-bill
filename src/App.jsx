import initialFriends from "./data/initialFriends";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  return (
    <div className="min-h-[66vh] grid grid-cols-[34rem_44rem] gap-x-[4rem] items-start">
      <div>
        <FriendList friends={initialFriends} />
        <FormAddFriend />
        <button
          className="bg-[var(--color-medium)] text-[#393f44] py-[0.8rem] px-[1.2rem] border-none rounded-[7px] font-bold 
      cursor-pointer transition duration-300 hover:bg-[var(--color-dark)] hover:text-[#dde3e7] float-right mr-[1.2rem]"
        >
          Tambah Teman
        </button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
