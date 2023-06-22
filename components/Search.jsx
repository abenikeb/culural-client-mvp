export default function Search() {
  return (
    <div className="bg-[#f9ebeb] w-[32rem] flex h-[2rem] m-auto rounded-[6px] shadow-lg mt-[3rem]">
      <input
        type="text"
        className="bg-[#f9ebeb] p-[25px]  w-[27rem] shadow-xl rounded-[6px]"
        placeholder="Search..."
      />
      <button className="bg-[#912c2c] h-[52px] w-[5rem]  shadow-xl rounded-[6px] text-white">
        Search
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-red-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </div>
  );
}