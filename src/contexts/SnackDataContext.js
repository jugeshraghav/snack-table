import { useState } from "react";
import { createContext } from "react";
import { snacks } from "../constants/snacksData";

export const SnackDataContext = createContext();

export const SnackDataProvider = ({ children }) => {
  <SnackDataContext.Provider>{children}</SnackDataContext.Provider>;
};
