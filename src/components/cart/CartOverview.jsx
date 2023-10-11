import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppProvider";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const { cartItems, cartTotal } = useAppContext();

  if (!cartTotal) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-slate-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{cartItems} pizzas</span>
        <span>{formatCurrency(cartTotal)}</span>
      </p>
      <Link to="cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
