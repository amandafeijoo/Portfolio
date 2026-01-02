import { createContext } from "react";

export const HeaderContext = createContext({
  headerMode: "fixed", // fixed | sticky
  setHeaderMode: () => {},
});

