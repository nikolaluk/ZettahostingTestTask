import data from "../data/data.json"

export const searchReduce = (array, query)  => {
    const regexTemplate = new RegExp(query, 'gi')

    let temp = [];

    for(let game of array) {
        if(regexTemplate.test(game.title) || regexTemplate.test(game.genre) || regexTemplate.test(returnProvider(game.provider).name)) {
            temp.push(game);
        }
    }

    return temp;
}

const returnProvider = (providerId) => {

    //todo you may use .find() here
    for(let provider of data.providers) {
        if(providerId == provider.id) {
            return provider;
        }
    }

    return null;
}
