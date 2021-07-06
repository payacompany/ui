module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#5b3cc4",
				success: "rgb(23, 201, 100)",
				danger: "rgb(242, 19, 93)",
				warning: "rgb(255, 130, 0)",
				dark: "rgb(36, 33, 69)",
			},
		},
	},
	variants: {
		extend: {
			borderWidth: ["last"],
			backgroundColor: ["odd"],
		},
	},
	plugins: [],
};
