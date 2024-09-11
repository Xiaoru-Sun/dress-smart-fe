import { forwardRef, useEffect, useRef, useState } from "react";

type CategoryCardProp = {
  categoryObject: { category: string; subCategory: string[] };
  handleToggle: () => void;
  isToggled: boolean;
};

type Ref = HTMLButtonElement;

const CategoryCard = forwardRef<Ref, CategoryCardProp>(function (
  { categoryObject, handleToggle, isToggled }: CategoryCardProp,
  ref
) {
  {
    // const [toggled, setToggled] = useState<boolean>(false);
    // const handleToggle = () => {
    //   setToggled(!toggled);
    // };

    // const dropDownRef = useRef(null);

    // useEffect(() => {
    //   const handler = (e) => {
    //     console.log("target", e.target);
    //     if (dropDownRef.current) {
    //       if (!dropDownRef.current.contains(e.target)) {
    //         setToggled(false);
    //       }
    //     }
    //   };
    //   document.addEventListener("click", handler);
    //   return () => {
    //     document.removeEventListener("click", handler);
    //   };
    // }, []);

    return (
      <>
        <div
          className="w-[80%] flex flex-col items-start justify-center"
          ref={ref}
        >
          <button
            className="w-full h-full flex justify-between ml-4 text-secondary font-semibold"
            onClick={handleToggle}
          >
            <span> {categoryObject.category}</span>
            <span>{isToggled ? "-" : "+"}</span>
          </button>
        </div>

        {categoryObject.subCategory.map((subCategoryObject, index) => {
          return (
            <div
              className={`text-primary ${isToggled ? "visible" : "hidden"}`}
              key={index}
            >
              {subCategoryObject} {categoryObject.category}
            </div>
          );
        })}
      </>
    );
  }
});

export default CategoryCard;
