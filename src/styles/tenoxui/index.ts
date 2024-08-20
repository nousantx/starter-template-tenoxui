import { useLayoutEffect } from "react";
import tenoxui, { use } from "tenoxui";
import { property as txProps } from "./lib/property";
import { values as txValues } from "./lib/values";
import { classNames, classUtils } from "./lib/classes";
import { merge } from "@/utils/merge-obj";

export const styler = ({ property = {}, values = {}, classes = {}, deps = [] } = {}) => {
  useLayoutEffect(() => {
    use({
      property: { ...txProps, ...property },
      values: { ...txValues, ...values },
      classes: merge(classNames, classUtils, classes)
      // breakpoint
    });



    tenoxui();
  }, [...deps]);
};

export default styler;
