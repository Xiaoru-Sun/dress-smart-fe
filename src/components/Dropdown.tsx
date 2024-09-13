import MenuItems from "./MenuItems";

const Dropdown = ({ menu, toggled, name }) => {
  return (
    <div className={` w-full ${toggled ? "visible" : "hidden"}`}>
      {menu.map((subMenu, index) => {
        return (
          <div key={index}>
            <MenuItems items={subMenu} name={`${subMenu}  ${name}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
