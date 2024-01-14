import { useContext, useEffect, useState } from "react";
import searchImg from "../../../assets/rmx-search-2-line.svg";

import "./SearchInput.css"
import CatalogContext from "../../../contexts/catalogContext";

function SearchInput() {
    const { activeSearchQuery, changeActiveSearchQueryHandler } = useContext(CatalogContext);

    const [searchQuery, setSearchQuery] = useState('');

    function searchQueryChangeHandler(event) {
        event.preventDefault();

        setSearchQuery(event.target.value);
        changeActiveSearchQueryHandler(event.target.value);
    }

    useEffect(() => {
        setSearchQuery(activeSearchQuery);
    }, [activeSearchQuery])

    return(
        <div className="search-input">
            <img src={searchImg} alt="da" />
            <input type="text" placeholder="Search for game or provider" className="search-big" id="search-input-one" value={searchQuery} onChange={searchQueryChangeHandler}/>
            <input type="text" placeholder="Search" className="search-small" id="search-input-two" value={searchQuery} onChange={searchQueryChangeHandler}/>
        </div>
    )
}

export default SearchInput;