import { Link } from "react-router-dom";
import SearchOrder from "../components/order/SearchOrder";

function Header() {
	return (
		<header>
			<Link to="/">React Pizza</Link>
			<SearchOrder />
			<p>replay</p>
		</header>
	);
}
export default Header;
