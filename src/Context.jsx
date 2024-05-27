import React, { useContext } from "react";
const ContextValue = React.createContext({
 
  
})


export const ContextProvider = ContextValue.Provider
export  const useContextValue=()=>{ return useContext(ContextValue)}
      
