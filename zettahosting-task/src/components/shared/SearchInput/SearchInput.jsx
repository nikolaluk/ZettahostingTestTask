import { useContext, useState } from "react";
import searchImg from "../../../assets/rmx-search-2-line.svg";

import "./SearchInput.css"
import CatalogContext from "../../../contexts/catalogContext";

function SearchInput() {
    const { changeActiveSearchQueryHandler } = useContext(CatalogContext);

    const [searchQuery, setSearchQuery] = useState('');

    function searchQueryChangeHandler(event) {
        event.preventDefault();

        setSearchQuery(event.target.value);
        changeActiveSearchQueryHandler(event.target.value);
    }

    return(
        <div className="search-input">
            <img src={searchImg} alt="da" />
            <input type="text" placeholder="Search for game or provider" className="search-big" value={searchQuery} onChange={searchQueryChangeHandler}/>
            <input type="text" placeholder="Search" className="search-small" value={searchQuery} onChange={searchQueryChangeHandler}/>
        </div>
    )
}

export default SearchInput;