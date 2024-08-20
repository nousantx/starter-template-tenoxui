import { colors } from "./color";
import { createColors, createRGBColors } from "@/utils/color-utils";
import { useClasses } from "@/utils/classes";

// create className based styles
export const classNames = useClasses({
  // example

  "its-just-example": {
    "--my-exa-color": "#121315",
    color: "#ccf654",
    backgroundColor: "var(--my-exa-color)"
  }
  // same as
  // "--my-exa-color": { "its-just-example": "..." },
  // color: { "its-just-example": "..." },
  // backgroundColor: { "its-just-example": "var(--my-exa-color)" }
});

// creating utility-first classes
export const classUtils = {
  // example for creating color in 11 shades
  // {cssProperty}: createColors({arrayOfColors}, {prefix})
  color: createColors(colors, "text"),
  // same as
  // color: {
  //   "text-red-50": "",
  //   "text-red-100": "",
  //   "text-red-200": ""
  //   // ...
  // },

  // creating background color classes
  backgroundColor: createColors(colors, "bg"),
  // also work for setting the variable values
  "--my-variable": createColors(colors, "var"),

  // regular classes example
  // {cssProperty}: {...{className: cssValue}}
  display: {
    flex: "flex", // same as _ .flex { display: flex }
    hidden: "none" // usage _ <div className="hidden"></div>; same as _ .hidden { display: none }
  },
  // other
  fontWeight: {
    "font-light": "300", // // usage _ <div className="font-light"></div>; same as _ .font-light { font-weight: 300 }
    "font-normal": "400",
    "font-medium": "500"
    // ...
  }
};
