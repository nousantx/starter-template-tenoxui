export const values = {
  // this is where you can define your custom values to make easier for creating design system :v

  // example for global values, available for all types and properties
  // {type}-{customValue}
  full: "100%", // usage _ <div class="w-full"></div>
  primary: "#ccf654", // usage _ <div class="text-primary"></div> _ same as .text-primary { color: #ccf654 }

  // customValues for exact type and property
  // {type}: {...{valueName: cssValue}}
  w: {
    "2xl": "300px", // usage _ <div class="w-2xl"></div>
    // other type can't access the value defined under exact type like this, like `h-2xl` or `p-2xl`. The value will only available for that exact type.

    // re-write value
    full: "200px" // will
  }
};
