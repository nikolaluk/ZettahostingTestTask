import data from "../data/data.json"

export const applyFilter = (games, filter) => {
    if (filter == null) {
        return games;
    }

    //move the common variable outside, renamed it so we know what's it used for
    let output = [];
    if (filter == "Favorites") {
        data.favorites.forEach(favorite =>
            output.push(games.find(game => game.id == favorite)));
    } else if (filter == "Popular") {
        data.popular.forEach(popular =>
            output.push(games.find(game => game.id == popular)));
    }

    return output;
}

//renamed array to games, so we know what's inside of it
export const applyProvider = (games, provider) => {
    if (provider == null) {
        return games;
    }

    // FIX: cleaned up fors and ifs using the filter function
    return games.filter(game => game.provider == provider.id);
}

export const applyGenre = (games, genre) => {
    if (genre == null) {
        return games;
    }

    // FIX: cleaned up fors and ifs using the filter function
    return games.filter(game => game.genre == genre.toLowerCase());
}