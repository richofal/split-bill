export default function Friend({ friend, onSelected }) {
  return (
    <li
      className="grid grid-cols-[4.8rem_1fr_auto] items-center col-gap-[1.6rem] p-[1.2rem] rounded-[7px] 
    transition duration-500 hover:bg-[var(--color-lightest)] gap-x-[1.6rem]"
    >
      <img
        src={friend.image}
        alt={friend.name}
        className="rounded-[50%] w-[100%] row-span-2"
      />
      <h3 className="row-start-1 col-start-2">{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="text-[#e03131] row-start-2 col-start-2">
          Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="text-[#2e8b57] row-start-2 col-start-2">
          {friend.name} berhutang Rp{friend.balance} ke kamu
        </p>
      )}
      {friend.balance === 0 && (
        <p className="row-start-2 col-start-2">
          Kamu dan {friend.name} tidak ada hutang
        </p>
      )}
      <button
        className="bg-[var(--color-medium)] text-[#393f44] py-[0.8rem] px-[1.2rem] border-none rounded-[7px] 
      font-bold cursor-pointer transition duration-300 hover:bg-[var(--color-dark)] hover:text-[#dde3e7] 
      float row-span-2 col-start-3"
        onClick={() => onSelected(friend)}
      >
        Pilih
      </button>
    </li>
  );
}
