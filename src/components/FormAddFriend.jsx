export default function FormAddFriend() {
  return (
    <form
      action=""
      className="grid grid-cols-[1fr_1.5fr] mb-[1.6rem] p-[1.2rem]"
    >
      <label htmlFor="">Nama</label>
      <input type="text" />
      <label htmlFor="">Gambar</label>
      <input type="text" />
      <button
        className="bg-[var(--color-medium)] text-[#393f44] py-[0.8rem] px-[1.2rem] border-none rounded-[7px] font-bold 
      cursor-pointer transition duration-300 hover:bg-[var(--color-dark)] hover:text-[#dde3e7] mt-[0.6rem] col-start-2"
      >
        Tambah
      </button>
    </form>
  );
}
