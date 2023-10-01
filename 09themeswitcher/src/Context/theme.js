import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// We can create, Custom Hooks also like this:-
export default function useTheme() {
  return useContext(ThemeContext);
}
