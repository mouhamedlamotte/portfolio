// import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function addVariablesForColors({ addBase, theme }: any) {
//     const allColors = flattenColorPalette(theme("colors"));
//     const newVars = Object.fromEntries(
//       Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
//     );
   
//     addBase({
//       ":root": newVars,
//     });
//   }