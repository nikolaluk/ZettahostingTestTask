import searchImg from "../../../assets/rmx-search-2-line.svg";

import "./SearchInput.css"

function SearchInput() {
    return(
        <div className="search-input">
            <img src={searchImg} alt="da" />
            <input type="text" placeholder="Search for game or provider"/>
        </div>
    )
}

export default SearchInput;