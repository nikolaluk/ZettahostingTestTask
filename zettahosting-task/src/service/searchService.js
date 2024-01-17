import data from "../data/data.json"

export const searchReduce = (games, query)  => {
    const regexTemplate = new RegExp(query, 'gi')

    // FIX: cleaned up fors and ifs using the filter function
    return games.filter(game => 
        regexTemplate.test(game.title) || 
        regexTemplate.test(game.genre) || 
        regexTemplate.test(returnProvider(game.provider).name));
}

const returnProvider = (providerId) => {
    // FIX: cleaned up fors and ifs with .find() just like you suggested
    return data.providers.find(provider => provider.id == providerId);
}
