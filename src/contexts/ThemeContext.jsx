import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const computedTextClass = isDark ? "text-light" : "text-dark";
  const computedSecondaryTextClass = isDark
    ? "text-secondary"
    : "text-dark text-opacity-75";
  const computedNavBg = isDark ? "bg-primary" : "bg-info";
  const computedVariant = isDark ? "primary" : "info";
  const computedFormClass = isDark ? "bg-dark text-light border-secondary" : "";
  const computedAlertVariant = isDark ? "danger" : "info";

  const computedNavIconColor = isDark ? "white" : "#252525";
  const computedMainBg = isDark ? "bg-dark" : "";
  const computedFooterBg = isDark ? "bg-black" : "bg-info";
  const computedCollapseShadow = isDark
    ? "border border-secondary shadow-none"
    : "border border-black  shadow-lg";
  const computedCommentBg = isDark
    ? "bg-secondary text-light"
    : "bg-dark-subtle text-dark";
  const toggleDarkTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleDarkTheme,
        computedTextClass,
        computedSecondaryTextClass,
        computedVariant,
        computedNavBg,
        computedNavIconColor,
        computedMainBg,
        computedAlertVariant,
        computedFooterBg,
        computedCollapseShadow,
        computedFormClass,
        computedCommentBg,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
