import data from "../data/data.json"

export const applyFilter = (array, filter) => {
    if(filter == "All") {
        return array;
    }

    //move the common variable outside, renamed it so we know what's it used for
    let output = [];
    if(filter == "Favorites") {
        for(let favorite of data.favorites) {
            for(let game of array) {
                if(game.id == favorite) {
                    output.push(game);
                }
            }
        }
    } else if(filter == "Popular") {
        for(let popular of data.popular) {
            for(let game of array) {
                if(game.id == popular) {
                    output.push(game);
                }
            }
        }
    }

    return output;
}

//renamed array to games, so we know what's inside of it
export const applyProvider =  (games, provider) => {
    if(provider == null) {
        return games;
    }

    //you don't need else if you are returning in the if
    //use filter instead of for and ifs for cleaner code
    return games.filter(game => game.provider == provider.id);
}

export const applyGenre = (array, genre) => {
    if(genre == "all") {
        return array;
    } else {
        let temp = [];
        for(let game of array) {
            if(game.genre == genre.toLowerCase()) {
                temp.push(game);
            }
        }
        return temp;
    }
}
