import CategoryCard from "../components/CategoryCard";

const Wardrobe = () => {
  const wardrobeDummyData = [
    {
      id: 1,
      category: "Coats",
      subCategory: ["Smart Coats", "Casual Coats", "Winter Coats"],
    },
    { id: 2, category: "Dresses" },
    { id: 3, category: "Skirts" },
    { id: 4, category: "Trousers" },
    { id: 5, category: "Jeans" },
    { id: 6, category: "Shoes" },
    { id: 7, category: "Accessories" },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-[16px] text-secondary font-bold">Wardrobe</h1>
      <div className="h-[87%] flex flex-col w-[85%] justify-evenly ">
        {wardrobeDummyData.map((categoryObject, index) => {
          return (
            <div
              className="h-[11%] mt-1 mb-1 rounded-lg border-secondary border-solid border-2 flex items-center"
              key={index}
            >
              <CategoryCard categoryObject={categoryObject} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wardrobe;
