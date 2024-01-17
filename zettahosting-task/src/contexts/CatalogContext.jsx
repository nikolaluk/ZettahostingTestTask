import { createContext, useEffect, useState } from "react";
import { applyFilter, applyGenre, applyProvider } from "../service/filtersService";
import jsonData from "../data/data.json";
import { searchReduce } from "../service/searchService";

const CatalogContext = createContext();
CatalogContext.displayName = 'CatalogContext';

// eslint-disable-next-line react/prop-types
export const CatalogProvider = ({ children }) => {
    //you may use null instead of 'All' here
    //FIX: chnaged default state value to null
    const [activeFilter, setActiveFilter] = useState(null);
    const [activeProvider, setActiveProvider] = useState(null);
    const [activeGenre, setActiveGenre] = useState('all');
    const [activeSearchQuery, setActiveSearchQuery] = useState('');

    const [gamesToShow, setGamesToShow] = useState(jsonData.games);
    const [gamesToShowChanged, setGamesToShowChanged] = useState(false);

    const changeActiveFilterHandler = (string) => {
        setActiveFilter(string);
        setGamesToShowChanged(true);
    }

    const changeActiveProviderHandler = (id) => {
        for (let provider of jsonData.providers) {
            if (provider.id == id) {
                //those were doing the same thing, we can use ||
                if(activeProvider == null || provider.id != activeProvider.id) {
                    setActiveProvider(provider);
                } else {
                    setActiveProvider(null);
                }
                setGamesToShowChanged(true);
                return;
            }
        }

        setActiveProvider(null);
    }

    //renamed string to genre so we know what exactly it is
    const changeActiveGenreHandler = (genre) => {
        if(activeGenre != genre) {
            setActiveGenre(genre);
        } else {
            setActiveGenre("all");
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
            //looks a lot better when you use the reduce function
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
