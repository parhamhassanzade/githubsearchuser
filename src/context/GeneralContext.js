import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

export const ContextProvider = (props) => {
  const [info, setInfo] = useState([]);
  return <GeneralContext.Provider value={[info, setInfo]}>{props.children}</GeneralContext.Provider>;
};
