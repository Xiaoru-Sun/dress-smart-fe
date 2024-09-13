import { forwardRef } from "react";

type CategoryCardProp = {
  categoryObject: { category: string; subCategory: string[] };
  handleToggle: () => void;
  isToggled: boolean;
  index: number;
};

type Ref = HTMLButtonElement;

const CategoryCard = forwardRef<Ref, CategoryCardProp>(function (
  { categoryObject, handleToggle, isToggled, index }: CategoryCardProp,
  ref
) {
  {
    return (
      <>
        <div
          className="flex flex-col items-center rounded-2xl border-secondary border-solid border-2 "
          key={index}
        >
          <div className="w-[80%]" ref={ref}>
            <button
              className="w-full h-full flex justify-between ml-4 text-secondary font-semibold border"
              onClick={handleToggle}
            >
              <span> {categoryObject.category}</span>
              <span>{isToggled ? "-" : "+"}</span>
            </button>
          </div>
        </div>

        {categoryObject.subCategory.map((subCategoryObject, index) => {
          return (
            <div
              className={`text-primary ${isToggled ? "visible" : "hidden"}`}
              key={index}
            >
              <button>
                {subCategoryObject} {categoryObject.category}
              </button>
            </div>
          );
        })}
      </>
    );
  }
});

export default CategoryCard;
