/** @format */

export const showProducts = (products) => {
	return {
		type: "SHOW_PRODUCTS",
		payload: products,
	};
};
