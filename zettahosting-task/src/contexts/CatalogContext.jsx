import { createContext, useEffect, useState } from "react";
import { applyFilter, applyGenre, applyProvider } from "../service/filtersService";
import jsonData from "../data/data.json";
import { searchReduce } from "../service/searchService";

const CatalogContext = createContext();
CatalogContext.displayName = 'CatalogContext';

// eslint-disable-next-line react/prop-types
export const CatalogProvider = ({ children }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeProvider, setActiveProvider] = useState(null);
    const [activeGenre, setActiveGenre] = useState('all');
    const [activeSearchQuery, setActiveSearchQuery] = useState(null);

    const [gamesToShow, setGamesToShow] = useState(jsonData.games);
    const [gamesToShowChanged, setGamesToShowChanged] = useState(false);

    const changeActiveFilterHandler = (string) => {
        setActiveFilter(string);
        setGamesToShowChanged(true);
    }

    const changeActiveProviderHandler = (id) => {
        for (let provider of jsonData.providers) {
            if (provider.id == id) {
                setActiveProvider(provider);
                setGamesToShowChanged(true);
            }
        }
    }

    const changeActiveGenreHandler = (string) => {
        setActiveGenre(string);
        setGamesToShowChanged(true);
    }

    const changeActiveSearchQueryHandler = (query) => {
        setActiveSearchQuery(query)
        setGamesToShowChanged(true);
    }

    const values = {
        changeActiveFilterHandler,
        changeActiveProviderHandler,
        changeActiveGenreHandler,
        changeActiveSearchQueryHandler,
        activeFilter,
        activeProvider,
        activeGenre,
        activeSearchQuery,
        gamesToShow,
    }

    //TODO: All of this can be exported in a service file
    useEffect(() => {
        if (gamesToShowChanged) {
            let temp = applyFilter(jsonData.games, activeFilter);
            temp = applyProvider(temp, activeProvider);
            temp = applyGenre(temp, activeGenre);
            temp = searchReduce(temp, activeSearchQuery);

            setGamesToShow(temp);
            setGamesToShowChanged(false);
        }

    }, [activeFilter, activeProvider, activeGenre, gamesToShow, gamesToShowChanged]);

    return (
        <CatalogContext.Provider value={values}>
            {children}
        </CatalogContext.Provider>
    )
}

export default CatalogContext;