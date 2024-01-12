import { createContext, useState } from "react";
import jsonData from "../data/data.json";

const CatalogContext = createContext();
CatalogContext.displayName = 'CatalogContext';

export const CatalogProvider = ({ children }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeProvider, setActiveProvider] = useState(null);
    const [activeGenre, setActiveGenre] = useState('all');

    const [gamesToShow, setGamesToShow] = useState(jsonData.games);

    const changeActiveFilterHandler = (string) => {
        setActiveFilter(string);

        reduceGamesToShow();
    }

    const changeActiveProviderHandler = (id) => {
        for (let provider of jsonData.providers) {
            if (provider.id == id) {
                setActiveProvider(provider);
            }
        }
        reduceGamesToShow();
    }

    const changeActiveGenreHandler = (string) => {
        setActiveGenre(string);

        reduceGamesToShow();
    }

    const reduceGamesToShow = () => {
        let temp = [];
        if (activeFilter == "All") {
            setGamesToShow(jsonData.games);

            if (activeProvider) {
                if (activeGenre == "all") {
                    for (let game of jsonData.games) {
                        if (game.provider == activeProvider.id) {
                            temp.push(game);
                        }
                    }
                } else {
                    for (let game of jsonData.games) {
                        if (game.provider == activeProvider.id && game.genre == activeGenre.toLowerCase()) {
                            temp.push(game);
                        }
                    }
                }
            } else {
                if (activeGenre == "all") {
                    temp = gamesToShow;
                } else {
                    for (let game of jsonData.games) {
                        if (game.genre == activeGenre.toLowerCase()) {
                            temp.push(game);
                        }
                    }
                }
            }
        }  else if (activeFilter == "Favourites") {

        } else if (activeFilter == "Popular") {
        
        } else {
            setGamesToShow([]);
        }
        console.log(temp);
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