import { useEffect, useRef } from "react";
import CategoryCard from "../components/CategoryCard";

const Wardrobe = () => {
  const dropDownRef = useRef(null);

  const handler = (e) => {
    console.log("target", e.target);
    if (dropDownRef.current) {
      if (!dropDownRef.current.contains(e.target)) {
        setToggled(false);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const wardrobeDummyData = [
    {
      id: 1,
      category: "Coats",
      subCategory: ["Smart", "Casual", "Winter"],
    },
    { id: 2, category: "Dresses", subCategory: ["Smart", "Casual", "Winter"] },
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
      <div className="h-[85%] w-[85%] flex flex-col justify-evenly ">
        {wardrobeDummyData.map((categoryObject, index) => {
          return (
            <div
              className="h-[10%] rounded-lg border-secondary border-solid border-2 flex items-center"
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
