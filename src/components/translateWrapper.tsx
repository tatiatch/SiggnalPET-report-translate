import React from "react";
import { translateJSX } from "../utils/translateJSX";

interface ITranslateWrapper {
  children?: any,
  locale?: string,
}

const TranslateWrapper = ({ children, locale }: ITranslateWrapper) => {
  const urlParams = new URLSearchParams(window.location.search);
  const queryLang = urlParams.get('lang');
  const lang = locale || queryLang || 'en';
  return <>{React.Children.map(children, (child) => translateJSX(child, lang))}</>;
};

export default TranslateWrapper;
