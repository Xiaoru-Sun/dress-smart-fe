import WardrobeList from "../components/WardrobeList";

const Wardrobe = () => {
  const wardrobeDummyData = [
    {
      id: 1,
      category: "Coats",
      subCategory: ["smart", "Casual", "Winter"],
    },
    {
      id: 2,
      category: "Dresses",
      subCategory: ["Long", "Midi", "Formal & Work"],
    },
    { id: 3, category: "Skirts", subCategory: ["Smart", "Casual", "Winter"] },
    { id: 4, category: "Trousers", subCategory: ["Smart", "Casual", "Winter"] },
    { id: 5, category: "Jeans", subCategory: ["Smart", "Casual", "Winter"] },
    { id: 6, category: "Shoes", subCategory: ["Smart", "Casual", "Winter"] },
    {
      id: 7,
      category: "Accessories",
      subCategory: ["Smart", "Casual", "Winter"],
    },
  ];
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <h1 className="mt-4 text-[16px] text-secondary font-bold">Wardrobe</h1>
      <WardrobeList wardrobeData={wardrobeDummyData} />
    </div>
  );
};

export default Wardrobe;
