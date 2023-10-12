import { useAppContext } from "../../context/AppProvider";
import Button from "../../ui/Button";

// receive the pizza id
function UpdateItemQty({ pizzaId, currQuantity }) {
  const { dispatch } = useAppContext();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => {
          dispatch({ type: "DECREASE_ITEM_QTY", payload: pizzaId });
        }}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currQuantity}</span>
      <Button
        type="round"
        onClick={() => {
          dispatch({ type: "INCREASE_ITEM_QTY", payload: pizzaId });
        }}
      >
        +
      </Button>
    </div>
  );
}
export default UpdateItemQty;
