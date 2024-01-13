import { createContext, useEffect, useState } from "react";
import jsonData from "../data/data.json";

const CatalogContext = createContext();
CatalogContext.displayName = 'CatalogContext';

// eslint-disable-next-line react/prop-types
export const CatalogProvider = ({ children }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeProvider, setActiveProvider] = useState(null);
    const [activeGenre, setActiveGenre] = useState('all');

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

    const values = {
        changeActiveFilterHandler,
        changeActiveProviderHandler,
        changeActiveGenreHandler,
        activeFilter,
        activeProvider,
        activeGenre,
        gamesToShow,
    }

    //TODO: All of this can be exported in a service file
    useEffect(() => {
        if (gamesToShowChanged) {
            let temp = [];
            if (activeFilter == "All") {
                let allTemp = jsonData.games;

                if (activeProvider) {
                    if (activeGenre == "all") {
                        for (let game of allTemp) {
                            if (game.provider == activeProvider.id) {
                                temp.push(game);
                            }
                        }
                    } else {
                        for (let game of allTemp) {
                            if (game.provider == activeProvider.id && game.genre == activeGenre.toLowerCase()) {
                                temp.push(game);
                            }
                        }
                    }
                } else {
                    if (activeGenre == "all") {
                        temp = allTemp;
                    } else {
                        for (let game of allTemp) {
                            if (game.genre == activeGenre.toLowerCase()) {
                                temp.push(game);
                            }
                        }
                    }
                }
            } else if (activeFilter == "Favourites") {
                let favTemp = []; 
                for(let favourite of jsonData.favorites) {
                    for(let game of jsonData.games) {
                        if(game.id == favourite) {
                            favTemp.push(game);
                        }
                    }
                }

                if (activeProvider) {
                    if (activeGenre == "all") {
                        for (let game of favTemp) {
                            if (game.provider == activeProvider.id) {
                                temp.push(game);
                            }
                        }
                    } else {
                        for (let game of favTemp) {
                            if (game.provider == activeProvider.id && game.genre == activeGenre.toLowerCase()) {
                                temp.push(game);
                            }
                        }
                    }
                } else {
                    if (activeGenre == "all") {
                        temp = favTemp;
                    } else {
                        for (let game of favTemp) {
                            if (game.genre == activeGenre.toLowerCase()) {
                                temp.push(game);
                            }
                        }
                    }
                }
            } else if (activeFilter == "Popular") {
                let popTemp = []; 
                for(let popular of jsonData.popular) {
                    for(let game of jsonData.games) {
                        if(game.id == popular) {
                            popTemp.push(game);
                        }
                    }
                }

                if (activeProvider) {
                    if (activeGenre == "all") {
                        for (let game of popTemp) {
                            if (game.provider == activeProvider.id) {
                                temp.push(game);
                            }
                        }
                    } else {
                        for (let game of popTemp) {
                            if (game.provider == activeProvider.id && game.genre == activeGenre.toLowerCase()) {
                                temp.push(game);
                            }
                        }
                    }
                } else {
                    if (activeGenre == "all") {
                        temp = popTemp;
                    } else {
                        for (let game of popTemp) {
                            if (game.genre == activeGenre.toLowerCase()) {
                                temp.push(game);
                            }
                        }
                    }
                }
            } else {
                setGamesToShow([]);
            }
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