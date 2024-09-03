import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";

type NavbarProp = {
  handleSearchOpen: () => boolean;
};

const Navbar = ({ handleSearchOpen }: NavbarProp) => {
  return (
    <nav className="w-full h-[44px] flex items-center justify-between p-4 border-b-2 border-gray-200">
      <h2 className="font-lobster text-[22px] text-secondary">DressSmart</h2>
      <div className="flex items-center ">
        <FaSearch
          className="mr-4 w-[20px] h-[20px] text-secondary"
          onClick={handleSearchOpen}
        />
        <RxHamburgerMenu className="text-secondary text-[22px] font-bold" />
      </div>
    </nav>
  );
};

export default Navbar;
