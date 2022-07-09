/** @format */
// import { showProducts } from "./actions";
import { createStore } from "redux";

const initialState = {
	products: [],
};

const showProductsReducer = (state = initialState, { type, payload }) => {
	return state;
};

const store = createStore(showProductsReducer);

export default store;
