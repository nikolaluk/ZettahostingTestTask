import CatalogContext from "../../../contexts/CatalogContext";
import arrowImg from "../../../assets/rmx-arrow-down-s-line white.svg";

import { useContext, useEffect, useRef, useState } from "react";

import "./FilterTabDropdown.css"
import DropdownOption from "../DropdownOption/DropdownOption";

function FilterMore(data) {
    const content = data.data.content;

    const [optionsVisible, setOptionsVisible] = useState(false);
    const dropdownRef = useRef(null);

    const { activeFilter, changeActiveFilterHandler } = useContext(CatalogContext);

    function closeOptionsOnOutsideClick(event) {
        //you can use ? to skip the null check
        if (!dropdownRef.current?.contains(event.target)) {
            setOptionsVisible(false);
        }
    }

    function dropdownClickHandler() {
        setOptionsVisible(!optionsVisible);
    }

    useEffect(() => {
        document.addEventListener('click', closeOptionsOnOutsideClick);

        return () => {
            document.removeEventListener('click', closeOptionsOnOutsideClick);
        };
    }, []);

    return (
        <>
            {content == "More" &&
                <div className="dropdown-wrapper">
                    {/*you can make an array with those values and check if activeFilter is included*/}
                    <div className={`filter-more ${activeFilter != null && activeFilter != "Favorites" && activeFilter != "Popular" && activeFilter != "20% Cash Back" ? "active" : ""}`} onClick={dropdownClickHandler} ref={dropdownRef}>
                        <label className="dropdown-value">{activeFilter != null && activeFilter != "Favorites" && activeFilter != "Popular" && activeFilter != "20% Cash Back" ? activeFilter : content}</label>
                        <img src={arrowImg} />
                    </div>
                    {optionsVisible &&
                        <div className="dropdown-options-container">
                            <DropdownOption data={{ label: "Bonus AI", handler: changeActiveFilterHandler }} />
                            <DropdownOption data={{ label: "New", handler: changeActiveFilterHandler }} />
                            <DropdownOption data={{ label: "PP Jackpot", handler: changeActiveFilterHandler }} />
                            <DropdownOption data={{ label: "1.000.000 Euro Cash", handler: changeActiveFilterHandler }} />
                        </div>
                    }
                </div>}

            {content == "All" &&
                <div className="dropdown-wrapper">
                    <div className={"filter-more active"} onClick={dropdownClickHandler} ref={dropdownRef}>
                        <label className="dropdown-value">{activeFilter}</label>
                        <img src={arrowImg} />
                    </div>
                    {optionsVisible &&
                        <div className="dropdown-options-container">
                            <DropdownOption data={{ label: "All", handler: changeActiveFilterHandler }} />
                            <DropdownOption data={{ label: "Favorites", handler: changeActiveFilterHandler }} />
                            <DropdownOption data={{ label: "Popular", handler: changeActiveFilterHandler }} />
                            <DropdownOption data={{ label: "20% Cash Back", handler: changeActiveFilterHandler }} />
                            <DropdownOption data={{ label: "Bonus AI", handler: changeActiveFilterHandler }} />
                            <DropdownOption data={{ label: "New", handler: changeActiveFilterHandler }} />
                            <DropdownOption data={{ label: "PP Jackpot", handler: changeActiveFilterHandler }} />
                            <DropdownOption data={{ label: "1.000.000 Euro Cash", handler: changeActiveFilterHandler }} />
                        </div>
                    }
                </div>
            }

        </>


    )
}

export default FilterMore;
