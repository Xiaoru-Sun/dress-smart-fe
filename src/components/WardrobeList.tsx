import CategoryCard from "./CategoryCard";
import { useEffect, useRef, useState } from "react";

type categoryObject = { category: string; subCategory: string[] };
type WardrobeProp = { wardrobeData: categoryObject[] };

const WardrobeList = ({ wardrobeData }: WardrobeProp) => {
  const [toggledCategoryCardIndex, setToggledCategoryCardIndex] = useState<
    null | number
  >(null);

  const handleToggle = (index: number) => {
    setToggledCategoryCardIndex(
      toggledCategoryCardIndex === index ? null : index
    );
  };

  const dropDownRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target);
      if (toggledCategoryCardIndex !== null) {
        const currentDropdownRef =
          dropDownRefs.current[toggledCategoryCardIndex];
        if (currentDropdownRef && !currentDropdownRef.contains(e.target)) {
          setToggledCategoryCardIndex(null);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
  console.log(toggledCategoryCardIndex);

  return (
    <div className="h-[85%] w-[85%] flex flex-col justify-evenly">
      {wardrobeData.map((categoryObject, index) => {
        return (
          <CategoryCard
            categoryObject={categoryObject}
            handleToggle={() => {
              console.log("log category index", index);
              handleToggle(index);
            }}
            ref={(instance) => (dropDownRefs.current[index] = instance)}
            isToggled={index === toggledCategoryCardIndex}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default WardrobeList;
