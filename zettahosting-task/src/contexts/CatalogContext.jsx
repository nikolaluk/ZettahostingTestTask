import { createContext, useEffect, useState } from "react";
import { applyFilter, applyGenre, applyProvider } from "../service/filtersService";
import jsonData from "../data/data.json";
import { searchReduce } from "../service/searchService";

const CatalogContext = createContext();
CatalogContext.displayName = 'CatalogContext';

// eslint-disable-next-line react/prop-types
export const CatalogProvider = ({ children }) => {
    //FIX: chnaged default state values to null
    const [activeFilter, setActiveFilter] = useState(null);
    const [activeProvider, setActiveProvider] = useState(null);
    const [activeGenre, setActiveGenre] = useState(null);
    const [activeSearchQuery, setActiveSearchQuery] = useState('');

    const [gamesToShow, setGamesToShow] = useState(jsonData.games);
    const [gamesToShowChanged, setGamesToShowChanged] = useState(false);

    const changeActiveFilterHandler = (filter) => {
        setActiveFilter(filter);
        setGamesToShowChanged(true);
    }

    const changeActiveProviderHandler = (id) => {
        if (activeProvider == null || activeProvider.id != id) {
            setActiveProvider(jsonData.providers.find(provider => provider.id == id));
        } else if(activeProvider.id == id) {
            setActiveProvider(null);
        }

        setGamesToShowChanged(true);
    }

    const changeActiveGenreHandler = (genre) => {
        if (activeGenre != genre) {
            setActiveGenre(genre);
        } else {
            setActiveGenre(null);
        }
        setGamesToShowChanged(true);
    }

    const changeActiveSearchQueryHandler = (query) => {
        setActiveSearchQuery(query);
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

    useEffect(() => {
        if (gamesToShowChanged) {
            const filters = [
                (games) => applyFilter(games, activeFilter),
                (games) => applyProvider(games, activeProvider),
                (games) => applyGenre(games, activeGenre),
                (games) => searchReduce(games, activeSearchQuery),
            ]
            const games = filters.reduce((result, filterFn) => filterFn(result), jsonData.games);

            setGamesToShow(games);
            setGamesToShowChanged(false);
        }

    }, [activeFilter, activeProvider, activeGenre, activeSearchQuery, gamesToShow, gamesToShowChanged]);

    return (
        <CatalogContext.Provider value={values}>
            {children}
        </CatalogContext.Provider>
    )
}

export default CatalogContext;
