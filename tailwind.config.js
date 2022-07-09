/** @format */

module.exports = {
	content: ["./src/**/*.jsx", "./src/*.jsx"],
	theme: {
		extend: {
			colors: {
				primary: "#0d6efd",
				blackVariant: "rgba(0,0,0, .4)",
			},
			minWidth: {
				sideWidth: "40%",
			},
			maxWidth: {
				pref: "80%",
				semiMax: "90%",
			},
		},
	},
	plugins: [],
};
