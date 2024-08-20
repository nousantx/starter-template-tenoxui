import * as tenoxProperties from "@tenoxui/property";

const typesNProperties = {
  // regular type example
  // { type }: { cssProperty | cssProperty[] }
  w: "width", // usage _ <div class="w-100px"></div>; same as _ .w-100px { width: 100px; }

  text: "color",
  bg: "background",

  // multiple properties
  size: ["width", "height"], // usage _ <div class="size-250px"></div>; same as _ .size-250px { width: 250px; height: 250px; }

  // css variable type
  // { type }: { cssVariable | cssVariable[] }
  "my-color": "--my-color", // usage _ <div class="my-color-#f00 text-$my-color"></div>

  // other examples

  // multiple variables
  "some-thing": ["--my-color", "--my-other-color"],

  // mixed properties
  "my-radius": ["borderRadius", "--size"],

  // custom value property
  "my-padd": {
    // property: cssProperty | cssProperty[]
    property: "padding",
    // value: cssValue
    value: "1rem {value} 10px {value}"
    // all `{value}` will replaced with the inputted value
    // example _ <div class="my-padd-2rem"></div>
    // same as _ .my-padd-2rem { padding: 1rem 2rem 10px 2rem }
  },

  // other example you can take as reference
  p: "padding",
  "its-color": "--its-color",

  animation: ["animation", "webkitAnimation"], // prefixes

  parent: ["justifyContent", "alignItems"], // _ parent-center, parent-start, parent-[flex-end]

  gradient: {
    // _ gradient-blue, gradient-#f00
    property: "backgroundImage",
    value: "linear-gradient(to right, {value}, blue)"
  }
};

export const property = { ...tenoxProperties.default };
