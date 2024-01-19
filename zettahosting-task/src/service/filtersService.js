import data from "../data/data.json"

export const applyFilter = (games, filter) => {
    if (filter == null) {
        return games;
    }

    let output = [];
    //FIX: Combined conditions by using [] syntax for object
    data[filter.toLowerCase()]?.forEach(filterId => 
        output.push(games.find(game => game.id == filterId)));

    return output;
}

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