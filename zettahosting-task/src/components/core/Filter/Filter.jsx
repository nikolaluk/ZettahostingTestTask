import Dropdown from "../../shared/Dropdown/Dropdown";
import FilterTabDropdown from "../../shared/FilterTabDropdown/FilterTabDropdown";
import FilterTab from "../../shared/FilterTab/FilterTab";
import SearchInput from "../../shared/SearchInput/SearchInput";
import "./Filter.css"

function Filter() {

    return (
        <>
            <div className="filter-wrapper">
                {/* Left filter content */}
                <div className="filter-contents-left">
                    <FilterTab data={{ content: "All" }}></FilterTab>
                    <FilterTab data={{ content: "Favourites" }}></FilterTab>
                    <FilterTab data={{ content: "Popular" }}></FilterTab>
                    <FilterTab data={{ content: "20% Cash Back" }}></FilterTab>
                    <FilterTabDropdown data={{ content: "More" }}></FilterTabDropdown>
                </div>
                <div className="filter-contents-left-small">
                    <FilterTabDropdown data={{ content: "All" }}></FilterTabDropdown>
                </div>

                {/* Right filter content */}
                <div className="filter-contents-right">
                    <Dropdown data={{ label: "By provider" }}></Dropdown>
                    <Dropdown data={{ label: "By genre" }}></Dropdown>
                    <SearchInput></SearchInput>
                </div>

                <div className="filter-contents-right-small">
                    <Dropdown data={{ label: "By provider", compact: true }}></Dropdown>
                    <Dropdown data={{ label: "By genre", compact: true }}></Dropdown>
                    <SearchInput></SearchInput>
                </div>
            </div>

            <div className="filter-wrapper-split">
                {/* Left split filter content */}
                <div className="filter-wrapper-split-top">
                    <FilterTabDropdown data={{ content: "All" }}></FilterTabDropdown>
                    <SearchInput></SearchInput>
                </div>

                {/* Right split filter content */}
                <div className="filter-wrapper-split-bottom"> 
                    <Dropdown data={{ label: "By provider", compact: true }}></Dropdown>
                    <Dropdown data={{ label: "By genre", compact: true }}></Dropdown>
                </div>
            </div>
        </>
    )
}

export default Filter;