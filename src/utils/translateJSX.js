import React from "react";
import { translateText } from "./translate";

export const translateJSX = (element, locale) => {
  if (!React.isValidElement(element)) return element;

  const { children, translate } = element.props;

  if (translate === "yes" && typeof children === "string") {
    return React.cloneElement(element, {}, translateText(children, locale));
  }

  if (children) {
    const newChildren = React.Children.map(children, (child) =>
      translateJSX(child, locale)
    );
    return React.cloneElement(element, {}, newChildren);
  }

  return element;
};
