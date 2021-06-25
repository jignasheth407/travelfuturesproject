import React from "react";

const Searchbar = ({ placeholder }) => {
  return (
    <div className="flex items-center ">
      <div className>
        <input
          type="search"
          placeholder={placeholder}
          className="w-96 h-8 focus:outline-none p-2 text-gray rounded-l-xl"
        />
      </div>
      <div className="w-10 h-8 items-center flex bg-blue-200 rounded-r-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto  h-4 w-4 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Searchbar;
