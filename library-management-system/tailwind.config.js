const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust as needed
    "./node_modules/@material-tailwind/**/*.js", // Add Material Tailwind content
  ],
  theme: {
    extend: {
      // Your custom theme settings here
    },
  },
  plugins: [],
});

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Adjust as needed
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


// // const withMT = require("@material-tailwind/react/utils/withMT");
 
// // module.exports = withMT({
// //   content: [],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // });