import styler from "@styler";
import { useClasses } from "@/utils/classes";

const Home = () => {
  styler({
    // add new properties
    property: {
      text: "color",
      myBox: ["width", "height"],
    },
    // custom values
    values: {
      primary: "#ccf654",
    },
    // create classes utils
    classes: useClasses({
      "flex-center": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    }),
  });
  // usage example
  return (
    <div className="bg-#ccf654 text-blue myBox-150px flex-center br-8px hover:bg-red">
      Hello World
    </div>
  );
};

export default Home;
