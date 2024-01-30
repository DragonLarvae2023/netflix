function SearchSection() {
  return (
    <>
      <div className=" bg-searchBg inset-0 absolute  ">
        <form className="absolute " style={{
          inset:"20% 30%"
        }}>
          <input type="text" placeholder="what u wanna see today" />
          <button className="bg-red-500 font-bold text-center p-7 text-white">Search </button>
        </form>
      </div>
    </>
  );
}
export default SearchSection;
