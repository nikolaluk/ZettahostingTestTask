import { createContext, useState } from "react";
// import data from "../data/data.json";

const CatalogContext = createContext();
CatalogContext.displayName = 'CatalogContext';

export const CatalogProvider = ({children}) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeProvider, setActiveProvider] = useState('all');
    const [activeGenre, setActiveGenre] = useState('all');

    const changeActiveFilterHandler = (string) => {
        setActiveFilter(string);
    }

    const changeActiveProviderHandler = (string) => {
        setActiveProvider(string);
    }

    const changeActiveGenreHandler = (string) => {
        setActiveGenre(string);
    }

    const values = {
        changeActiveFilterHandler,
        changeActiveProviderHandler,
        changeActiveGenreHandler,
        activeFilter,
        activeProvider,
        activeGenre,
    }

    return (
        <CatalogContext.Provider value={values}>
            {children}
        </CatalogContext.Provider>
    )
}

export default CatalogContext;