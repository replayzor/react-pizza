import { Link } from "react-router-dom";
import SearchOrder from "../components/order/SearchOrder";
import Username from "../components/user/Username";

function Header() {
  return (
    <header className="flex justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        React Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
export default Header;
