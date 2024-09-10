import CategoryCard from "../components/CategoryCard";

const Wardrobe = () => {
  const wardrobeDummyData = [
    { id: 1, category: "Coat" },
    { id: 2, category: "Dresses" },
    { id: 3, category: "Skirts" },
    { id: 4, category: "Trousers" },
    { id: 5, category: "Jeans" },
    { id: 6, category: "Shoes" },
    { id: 7, category: "Accessories" },
  ];
  return (
    <div>
      <h1 className="text-[16px] text-secondary font-semibold mt-4 ">
        Wardrobe
      </h1>
      <div>
        {wardrobeDummyData.map((categoryObject, index) => {
          return (
            <div key={index}>
              <CategoryCard categoryObject={categoryObject} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wardrobe;
