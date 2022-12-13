import React from "react";
import { ConnectionContextType } from "src/type";

export const ConnectionContext = React.createContext<ConnectionContextType>({
  connection: false,
  setConnection: () => {},
  connected: false,
  setConnected: () => {},
  iv: "",
});
