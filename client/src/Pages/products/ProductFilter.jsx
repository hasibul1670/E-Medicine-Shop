/* eslint-disable react/prop-types */


const BookFilter = ({
  priceRange,
  setSelectedGenre,
  setSearchText,
  searchText,
  selectedGenre,
  value,
  handleRangeChange,
}) => {
  return (
    <div className="p-5">
      <h1 className="text-2xl uppercase">Price Range</h1>
      <input
        type="range"
        defaultValue={50}
        max={1600}
        min={0}
        step={1}
        onChange={handleRangeChange}
        className="range range-info"
      />
      <h1 className="font-bold mb-2 text-red-500 ">From 0$ To {value}$</h1>

      <input
        type="text"
        className="input input-bordered input-primary w-full max-w-xs mb-3"
        placeholder="Search by title, author, or genre"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <select
        className="select select-info w-full max-w-xs mb-5"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All Category</option>
        <option value="phone">Phone</option>
        <option value="watch">Watch</option>
        <option value="camera">Camera</option>
        <option value="laptop">Laptop</option>
        <option value="gaming">Gaming</option>
        <option value="headphones">Headphones</option>
        
      </select>




    </div>
  );
};

export default BookFilter;
