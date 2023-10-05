import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search order #"
        className="w-28 rounded-lg bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50 sm:w-48 sm:focus:w-72"
      />
    </form>
  );
}
export default SearchOrder;
