import { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataLayer = ({ initialState, reducer, children }) => (
	<DataLayerContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</DataLayerContext.Provider>
);

// eslint-disable-next-line react-refresh/only-export-components
export const useDataLayerValue = () => useContext(DataLayerContext);
