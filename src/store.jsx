import { createStore } from "redux";

// Action Types
const ADD_TASK = "item/add";
const DELETE_TASK = "item/delete";
const INCREMENT_TASK = "item/increment";
const DECREMENT_TASK = "item/decrement";

// Initial State
const initialState = {
  cartData: [],
};

try {
  const storedCart = localStorage.getItem("cartItems");
  if (storedCart) {
    initialState.cartData = JSON.parse(storedCart);
  }
} catch (error) {
  console.error("Failed to parse cartItems from localStorage", error);
  initialState.cartData = [];
}

// Reducer
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const existingItem = state.cartData.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        alert("This item already Added!");
        return {
          ...state,
          cartData: state.cartData.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartData: [...state.cartData, { ...action.payload, quantity: 1 }],
        };
      }

    case DELETE_TASK:
      const updatedData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cartData: updatedData };

    case INCREMENT_TASK:
      return {
        ...state,
        cartData: state.cartData.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case DECREMENT_TASK:
      return {
        ...state,
        cartData: state.cartData.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        ),
      };

    default:
      return state;
  }
};

// Create Redux store
export const store = createStore(taskReducer);

// Action Creators
export const addItem = (data) => {
  return { type: ADD_TASK, payload: data };
};

export const deleteItem = (id) => {
  return { type: DELETE_TASK, payload: id };
};

export const incrementQuantity = (id) => {
  return { type: INCREMENT_TASK, payload: id };
};

export const decrementQuantity = (id) => {
  return { type: DECREMENT_TASK, payload: id };
};

// console.log(store.getState());
