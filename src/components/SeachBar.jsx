import { useState } from "react"; 
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");

  return (
    <div className="flex justify-center gap-2 mt-6">
      <input onChange={(e)=>setQuery(e.target.value)} placeholder="Search..." />
      <input onChange={(e)=>setYear(e.target.value)} placeholder="Year" />
      <button onClick={()=>onSearch(query, year)}>Search</button>
    </div>
  );
}
export default SearchBar; 