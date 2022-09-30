import React from "react";
import { HomeContextType } from "src/type";

export const HomeContext = React.createContext<HomeContextType>({
  imageAsset: 0,
});
