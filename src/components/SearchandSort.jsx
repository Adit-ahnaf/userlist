import { useState } from "react";
export default function SearchandSort({findSearch, clearSearch, handleSorting}) {

  const [searchText, setSearchText] = useState("");
 
  return (
    <>
      {/* <!-- header --> */}
      <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          <div>
            <form>
              <div className="flex">
                <div className="relative w-full overflow-hidden rounded-lg border-2 border-blue-400 text-blue-400 md:min-w-[380px] lg:min-w-[440px]">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-blue-400 placeholder:text-blue-400 focus:outline-none"
                    placeholder="Search Book"
                    value={searchText}
                    onChange={(e)=>{setSearchText(e.target.value); clearSearch(e.target.value)}}
                    required
                  />
                  <div className="absolute right-0 top-0 flex h-full items-center">
                    <button
                      type="submit"
                      onClick={(e)=>findSearch(e,searchText)}
                      className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-blue-600 px-4 py-2.5 text-sm text-white"
                    >
                      <svg
                        className="h-[14px] w-[14px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span>Search</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {/* <!-- Search Box Ends --> */}
          </div>
          {/* <!-- sort - filter --> */}
          <div className="flex items-stretch space-x-3">
            {/* <!-- Sort --> */}
            <select
              className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
              name="sortBy"
              id="sortBy"
              onChange={handleSorting} 
            >
              <option value="sort">Sort</option>
              <option value="name">Name (A-Z)</option>
              <option value="email">Email (A-Z)</option>
              <option value="company">Company Name (A-Z)</option>
            </select>
          </div>
        </div>
      </header>
      {/* <!-- header ends --> */}
    </>
  );
}
