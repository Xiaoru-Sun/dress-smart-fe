import Navbar from "../components/Navbar";

type AppLayoutProp = {
  children: React.ReactNode;
  handleSearchOpen: () => void;
};

const AppLayout = ({ children, handleSearchOpen }: AppLayoutProp) => {
  return (
    <>
      <div>
        <Navbar handleSearchOpen={handleSearchOpen} />
        <main className="flex justify-center">{children}</main>
      </div>
    </>
  );
};

export default AppLayout;
