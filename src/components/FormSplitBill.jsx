import { useState } from "react";

export default function FormSplitBill({ selectedFriend, onSplitBlit }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBlit(whoIsPaying === "user" ? friendBill : -myBill);
  }
  return (
    <form
      action=""
      className="grid grid-cols-[1fr_12rem] py-[3.2rem] px-[4rem]"
      onSubmit={handleSubmit}
    >
      <h2>Patungan bareng si {selectedFriend.name}</h2>
      <label htmlFor="">💵 Total Tagihan</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label htmlFor="">🙋‍♂️ Tagihan Kamu</label>
      <input
        type="text"
        value={myBill}
        onChange={(e) => setMyBill(e.target.value)}
      />
      <label htmlFor="">🙋 Tagihan {selectedFriend.name}</label>
      <input type="text" value={friendBill} disabled />
      <label htmlFor="">Ditalangin sama</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button
        className="bg-[var(--color-medium)] text-[#393f44] py-[0.8rem] px-[1.2rem] border-none rounded-[7px] font-bold 
      cursor-pointer transition duration-300 hover:bg-[var(--color-dark)] hover:text-[#dde3e7] mt-[0.6rem] col-start-2"
      >
        Tambah
      </button>
    </form>
  );
}
