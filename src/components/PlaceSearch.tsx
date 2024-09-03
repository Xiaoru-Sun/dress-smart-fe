import { useEffect, useState } from "react";
const PlaceSearch = () => {
  const [query, setQuery] = useState("London");
  //   useEffect(() => {
  //     console.log(query);
  //   }, [query]);

  //   const handleQuery = () => console.log(query);
  return (
    <div className="absolute flex flex-col items-center w-[75%] min-h-[20%] z-20 bg-white rounded-bl-lg rounded-br-lg">
      <p className="text-[14px] font-semibold mt-3 mr-auto ml-4 text-secondary">
        Find your location
      </p>
      <input
        className="w-[90%] mt-2 p-2 pl-3 rounded-lg focus:outline-none border-2 border-primary placeholder:text-[14px] text-[14px] font-semibold text-secondary"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default PlaceSearch;
