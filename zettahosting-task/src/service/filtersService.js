import data from "../data/data.json"

export const applyFilter = (array, filter) => {
    if(filter == "All") {
        return array;
    } else if(filter == "Favourites") {
        let temp = [];
        for(let favourite of data.favorites) {
            for(let game of array) {
                if(game.id == favourite) {
                    temp.push(game);
                }
            }
        }
        return temp;
    } else if(filter == "Popular") {
        let temp = [];
        for(let popular of data.popular) {
            for(let game of array) {
                if(game.id == popular) {
                    temp.push(game);
                }
            }
        }
        return temp;
    } else {
        return [];
    }
}

export const applyProvider =  (array, provider) => {
    if(provider == null) {
        return array;
    } else {
        let temp = [];
        for(let game of array) {
            if(game.provider == provider.id) {
                temp.push(game);
            }
        }
        return temp;
    }
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