/* eslint-disable react/prop-types */
export default function Search({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
}
