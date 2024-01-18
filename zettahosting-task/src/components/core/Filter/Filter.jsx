import Dropdown from "../../shared/Dropdown/Dropdown";
import DropdownOption from "../../shared/DropdownOption/DropdownOption";
import FilterTabDropdown from "../../shared/FilterTabDropdown/FilterTabDropdown";
import FilterTab from "../../shared/FilterTab/FilterTab";
import SearchInput from "../../shared/SearchInput/SearchInput";
import CatalogContext from "../../../contexts/CatalogContext";

import jsonData from "../../../data/data.json";

import { useContext } from "react";

import "./Filter.css"

function Filter() {
    const { changeActiveProviderHandler, changeActiveGenreHandler } = useContext(CatalogContext);

    const dropdownProviderOptions = jsonData.providers.map(provider => {
        return <DropdownOption key={provider.id} data={{ label: provider.name, icon: provider.logo, value: provider.id, handler: changeActiveProviderHandler }} />
    })

    const dropdownGenreOptions = (
        <>
            <DropdownOption data={{ label: "Poker", handler: changeActiveGenreHandler }} />
            <DropdownOption data={{ label: "Slot", handler: changeActiveGenreHandler }} />
            <DropdownOption data={{ label: "Blackjack", handler: changeActiveGenreHandler }} />
            <DropdownOption data={{ label: "Rulet", handler: changeActiveGenreHandler }} />
        </>
    )


    return (
        <>
            <div className="filter-wrapper">
                {/* Left filter content */}
                <div className="filter-contents-left">
                    <FilterTab data={{ content: "All" }}></FilterTab>
                    <FilterTab data={{ content: "Favorites" }}></FilterTab>
                    <FilterTab data={{ content: "Popular" }}></FilterTab>
                    <FilterTab data={{ content: "20% Cash Back" }}></FilterTab>
                    <FilterTabDropdown data={{ content: "More" }}></FilterTabDropdown>
                </div>
                <div className="filter-contents-left-small">
                    <FilterTabDropdown data={{ content: "All" }}></FilterTabDropdown>
                </div>

                {/* Right filter content */}
                <div className="filter-contents-right">
                    <Dropdown data={{ label: "By provider", options: dropdownProviderOptions }}></Dropdown>
                    <Dropdown data={{ label: "By genre", options: dropdownGenreOptions }}></Dropdown>
                    <SearchInput></SearchInput>
                </div>

                <div className="filter-contents-right-small">
                    <Dropdown data={{ label: "By provider", options: dropdownProviderOptions, compact: true }}></Dropdown>
                    <Dropdown data={{ label: "By genre", options: dropdownGenreOptions, compact: true }}></Dropdown>
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
                    <Dropdown data={{ label: "By provider", options: dropdownProviderOptions, compact: true }}></Dropdown>
                    <Dropdown data={{ label: "By genre", options: dropdownGenreOptions, compact: true }}></Dropdown>
                </div>
            </div>
        </>
    )
}

export default Filter;