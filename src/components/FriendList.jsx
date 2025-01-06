import Friend from "./Friend";

export default function FriendList({ friends, onSelected }) {
  return (
    <ul className="list-none flex flex-col gap-[0.4rem] text-[1.4rem] mb-[2rem]">
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} onSelected={onSelected} />
      ))}
    </ul>
  );
}
