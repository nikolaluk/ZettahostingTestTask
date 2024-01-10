import FilterTab from "../FilterTab/FilterTab";
import SearchInput from "../SearchInput/SearchInput";
import "./Filter.css"

function Filter() {

    return (
        <div className="filter-wrapper">
            <div className="filter-contents-left">
                <FilterTab data={{content: "All", color: "green"}}></FilterTab>
                <FilterTab data={{content: "Favourites", color: "gray"}}></FilterTab>
                <FilterTab data={{content: "Popular", color: "gray"}}></FilterTab>
                <FilterTab data={{content: "20% Cash Back", color: "gray"}}></FilterTab>
            </div>
            <div className="filter-contents-right">
                <SearchInput></SearchInput>
            </div>
        </div>
    )
}

export default Filter;