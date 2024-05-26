import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="flex items-center justify-between h-[60px] container mx-auto">
        <Link to="/">
          <img className="h-[35px]" src="/src/assets/insta-logo.png" alt="" />
        </Link>

        <Search />

        <nav>
          <button>Logout</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
