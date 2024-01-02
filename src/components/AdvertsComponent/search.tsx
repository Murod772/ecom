import React, { useState, useEffect } from "react";
import { useLazyGetAdvertsQuery } from "../../api/apiSlice"; // Import the hook from your API slice
import { useDispatch } from "react-redux";
import { setSearchResults } from "../../api/advertsSlice";
import AdvertComponent from "./adverts";

const AdvertsSearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  // State and handlers for dropdown, pagination, etc., would also be defined here
  const [trigger, { data: adverts, isFetching }] = useLazyGetAdvertsQuery();

  const handleSearch = () => {
    trigger({ input: searchTerm, page: 1 });
  };

  useEffect(() => {
    if (adverts) {
      dispatch(setSearchResults(adverts));
    }
  }, [adverts, dispatch]);

  return (
    <>
      <div className="container mx-auto mt-10 px-6 py-6 rounded-2xl bg-white shadow-custom ">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Актуальные ставки
        </h2>
        <div className="search-area flex gap-8">
          <select
            className="flex w-56 p-3 items-center self-stretch rounded bg-gray-200 text-gray-700" /* ... */
          >
            <option value="search">Поиск</option>
          </select>
          <div className="flex flex-grow p-2 justify-between border-b border-bgBlue items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Поиск по названию или артикулу"
              className="search-input flex-grow rounded text-gray-700 focus:border-none" /* ... */
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z"
                stroke="#777777"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.0004 21.5L16.6504 17.15"
                stroke="#777777"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <button
            onClick={handleSearch}
            className="search-button p-2 rounded bg-MainYellow text-ContentBlack flex h-14 px-20 justify-center items-center gap-2 flex-shrink" /* ... */
          >
            Найти
          </button>
        </div>
      </div>
      <AdvertComponent adverts={adverts} loading={isFetching} />
    </>
  );
};

export default AdvertsSearchComponent;
