import { useAppContext } from "../../context/AppProvider";
import Button from "../../ui/Button";

function DeleteItem({ pizzaId }) {
  const { dispatch } = useAppContext();

  return (
    <Button
      onClick={() => dispatch({ type: "DELETE_ITEM", payload: pizzaId })}
      type="small"
    >
      Delete
    </Button>
  );
}
export default DeleteItem;
