import { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, name }) => {
  const [toggled, setToggled] = useState<boolean>(false);
  const handleToggle = () => {
    setToggled(!toggled);
  };

  const dropDownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setToggled(false);
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-center rounded-2xl border-secondary border-solid border-2 "
        ref={dropDownRef}
      >
        <button
          className="w-[80%] flex justify-between p-4 ml-4 text-secondary font-semibold "
          onClick={handleToggle}
        >
          <span> {name}</span>
          <span>{toggled ? "-" : "+"}</span>
        </button>
      </div>

      <div className={` w-full ${toggled ? "visible" : "hidden"}`}>
        {items.subCategory && (
          <Dropdown menu={items.subCategory} toggled={toggled} name={name} />
        )}
      </div>
    </>
  );
};

export default MenuItems;
