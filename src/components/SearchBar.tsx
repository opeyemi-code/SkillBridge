import { SearchIcon } from "lucide-react";

function Search() {
  return (
    <form className="bg-secondary-background my-4 p-4 rounded-xl flex flex-col gap-4">
      <label className="relative" htmlFor="search">
        <input
          className="block bg-main-background text-sm text-clip field-sizing-content pl-11 py-3 w-full rounded-lg"
          id="search"
          type="text"
          placeholder="Search names or skills (e.g. React, UX Writing, Design Systems)..."
        />
        <SearchIcon
          className="absolute top-4 left-5 text-secondary-text"
          size={14}
        />
      </label>
      {/* Button group */}
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <div className="flex gap-2 flex-wrap">
          <button
            className="text-xs bg-main-background text-primary px-3 py-1.5 font-medium rounded-lg"
            type="button"
          >
            All
          </button>
          <button
            className="text-xs bg-main-background text-secondary-text px-3 py-1.5 font-medium rounded-lg"
            type="button"
          >
            Development
          </button>
          <button
            className="text-xs bg-main-background text-secondary-text px-3 py-1.5 font-medium rounded-lg"
            type="button"
          >
            Design
          </button>
          <button
            className="text-xs bg-main-background text-secondary-text px-3 py-1.5 font-medium rounded-lg"
            type="button"
          >
            Writing
          </button>
          <button
            className="text-xs bg-main-background text-secondary-text px-3 py-1.5 font-medium rounded-lg"
            type="button"
          >
            Marketing
          </button>
          <button
            className="text-xs bg-main-background text-secondary-text px-3 py-1.5 font-medium rounded-lg"
            type="button"
          >
            Video
          </button>
        </div>
        {/* Dropdown list */}
        <label
          className="text-xs self-start bg-main-background text-secondary-text px-3 py-1.5 font-medium rounded-lg"
          htmlFor="rate"
        >
          <select name="rate" id="rate">
            <option value="Highest Relevance">Highest Relevance</option>
            <option value="Hourly Rate: Low to High">
              Hourly Rate: Low to High
            </option>
            <option value="Hourly Rate: High to Low">
              Hourly Rate: High to Low
            </option>
            <option value="Top Rated">Top Rated</option>
          </select>
        </label>
      </div>
    </form>
  );
}
export default Search;
