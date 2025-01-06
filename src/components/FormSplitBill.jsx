export default function FormSplitBill() {
  return (
    <form
      action=""
      className="grid grid-cols-[1fr_12rem] py-[3.2rem] px-[4rem]"
    >
      <h2>Patungan bareng si X</h2>
      <label htmlFor="">💵 Total Tagihan</label>
      <input type="text" />
      <label htmlFor="">🙋‍♂️ Tagihan Kamu</label>
      <input type="text" />
      <label htmlFor="">🙋 Tagihan X</label>
      <input type="text" disabled />
      <label htmlFor="">Ditalangin sama</label>
      <select name="" id="">
        <option value="user">Kamu</option>
        <option value="friend">X</option>
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
