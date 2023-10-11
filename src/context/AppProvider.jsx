import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  username: "",
  cart: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "ADD_ITEM":
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.pizzaId !== action.payload),
      };
    case "INCREASE_ITEM_QTY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.pizzaId === action.payload) {
            // Increase the quantity of the matching item
            return {
              ...item,
              quantity: item.quantity + 1,
              // Update the total price
              totalPrice: (item.quantity + 1) * item.unitPrice,
            };
          }
          return item;
        }),
      };
    case "DECREASE_ITEM_QTY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.pizzaId === action.payload) {
            // Decrease the quantity of the matching item
            const newQuantity = item.quantity - 1;

            // Ensure quantity doesn't go below 1
            const updatedQuantity = newQuantity >= 1 ? newQuantity : 1;

            return {
              ...item,
              quantity: updatedQuantity,
              // Update the total price
              totalPrice: updatedQuantity * item.unitPrice,
            };
          }
          return item;
        }),
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, cart } = state;

  const cartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce((total, item) => total + item.totalPrice, 0);

  const getCurrentQtyById = (id) => {
    return cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
  };

  return (
    <AppContext.Provider
      value={{
        username,
        dispatch,
        cart,
        cartItems,
        cartTotal,
        getCurrentQtyById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("useAppContext must be used within a AppProvider");
  return context;
};

export { AppProvider, useAppContext };
