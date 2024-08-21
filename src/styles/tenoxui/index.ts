import { useLayoutEffect, useMemo } from "react";
import tenoxui, { use } from "tenoxui";
import { property as txProps } from "./lib/property";
import { values as txValues } from "./lib/values";
import { classNames, classUtils } from "./lib/classes";
import { merge } from "@/utils/merge-obj";

export const styler = ({
  property = {},
  values = {},
  classes = {},
  deps = [],
} = {}) => {
  const config = useMemo(
    () => ({
      property: { ...txProps, ...property },
      values: { ...txValues, ...values },
      classes: merge(classNames, classUtils, classes),
    }),
    [property, values, classes],
  );

  useLayoutEffect(() => {
    use(config);
    tenoxui();
  }, [config, ...deps]);
};

export default styler;
