import { createContext, useReducer, useContext } from "react";
const DataLayerContext = createContext();
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);
export const useDataLayerValue = () => useContext(DataLayerContext);
