const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const media = {
  smallScreenLaptop: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};

export const Colors = {
  primaryColor: "#e1267b",
  secondaryColor: "#04A9F4",
  lightPink: "#FEA8B3",
  lightGrey: "#F3f3f3",
  white: "#FFFFFF",
  black: "#000000",
  darkGrey: "#D9D9D9",
};
