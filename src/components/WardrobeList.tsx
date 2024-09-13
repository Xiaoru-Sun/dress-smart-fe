import { useState } from "react";

type categoryObject = { category: string; subCategory: string[] };
type WardrobeProp = { wardrobeData: categoryObject[] };

const WardrobeList = ({ wardrobeData }: WardrobeProp) => {
  const [categoryIndex, setCategoryIndex] = useState<number | null>(null);
  const [subCategoryIndex, setSubcategoryIndex] = useState<number | null>(null);

  const handleClickCategory = (index: number | null) => {
    setCategoryIndex((categoryIndex) =>
      index === categoryIndex ? null : index
    );
    setSubcategoryIndex(null);
  };

  const handleSubCategoryIndex = (subIndex: number | null) => {
    setSubcategoryIndex((subCategoryIndex) =>
      subCategoryIndex === subIndex ? null : subIndex
    );
  };

  return (
    <>
      <div className="h-[85%] w-[85%] flex flex-col justify-evenly">
        {wardrobeData.map((categoryObject, index) => (
          <div key={index}>
            <div className="flex items-center justify-center rounded-xl border-secondary border-solid border-2 p-3">
              <button
                className="w-[80%] h-full flex justify-between ml-4 text-secondary font-semibold"
                onClick={() => {
                  console.log(index);
                  handleClickCategory(index);
                }}
              >
                <span> {categoryObject.category}</span>
                <span>{index === categoryIndex ? "-" : "+"}</span>
              </button>
            </div>
            <div>
              {categoryObject.subCategory.map((subCategory, subIndex) => (
                <div
                  key={subIndex}
                  className={`${
                    index === categoryIndex ? "visible" : "hidden"
                  }`}
                >
                  <div className="flex items-center justify-center rounded-xl border-primary border-solid border-2 p-3">
                    <button
                      className="w-[80%] h-full flex justify-between ml-4 text-secondary font-semibold"
                      onClick={() => {
                        handleSubCategoryIndex(subIndex);
                      }}
                    >
                      <span>
                        {subCategory} {categoryObject.category}{" "}
                      </span>
                      <span>{subCategoryIndex === subIndex ? "-" : "+"}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WardrobeList;
