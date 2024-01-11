import { createContext, useState } from "react";

const CatalogContext = createContext();
CatalogContext.displayName = 'CatalogContext';

export const CatalogProvider = ({children}) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const changeActiveFilterHandler = (string) => {
        console.log(string);
        setActiveFilter(string);
    }

    const values = {
        changeActiveFilterHandler,
        activeFilter,
    }

    return (
        <CatalogContext.Provider value={values}>
            {children}
        </CatalogContext.Provider>
    )
}

export default CatalogContext;