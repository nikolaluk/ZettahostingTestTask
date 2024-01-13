import CatalogContext from "../../../contexts/catalogContext";
import arrowImg from "../../../assets/rmx-arrow-down-s-line white.svg";

import { useContext, useEffect, useRef, useState } from "react";

import "./FilterTabDropdown.css"
import DropdownOption from "../DropdownOption/DropdownOption";

function FilterMore(data) {
    const content = data.data.content;

    const [optionsVisible, setOptionsVisible] = useState(false);
    const dropdownRef = useRef(null);

    const { activeFilter } = useContext(CatalogContext);

    function closeOptionsOnOutsideClick(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
                    <div className={`filter-more ${activeFilter != "All" && activeFilter != "Favourites" && activeFilter != "Popular" && activeFilter != "20% Cash Back" ? "active" : ""}`} onClick={dropdownClickHandler} ref={dropdownRef}>
                        <label className="dropdown-value">{activeFilter != "All" && activeFilter != "Favourites" && activeFilter != "Popular" && activeFilter != "20% Cash Back" ? activeFilter : content}</label>
                        <img src={arrowImg} />
                    </div>
                    {optionsVisible &&
                        <div className="dropdown-options-container">
                            <DropdownOption data={{ type: "filter", label: "Bonus AI" }} />
                            <DropdownOption data={{ type: "filter", label: "New" }} />
                            <DropdownOption data={{ type: "filter", label: "PP Jackpot" }} />
                            <DropdownOption data={{ type: "filter", label: "1.000.000 Euro Cash" }} />
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
                            <DropdownOption data={{ type: "filter", label: "All" }} />
                            <DropdownOption data={{ type: "filter", label: "Favourites" }} />
                            <DropdownOption data={{ type: "filter", label: "Popular" }} />
                            <DropdownOption data={{ type: "filter", label: "20% Cash Back" }} />
                            <DropdownOption data={{ type: "filter", label: "Bonus AI" }} />
                            <DropdownOption data={{ type: "filter", label: "New" }} />
                            <DropdownOption data={{ type: "filter", label: "PP Jackpot" }} />
                            <DropdownOption data={{ type: "filter", label: "1.000.000 Euro Cash" }} />
                        </div>
                    }
                </div>
            }

        </>


    )
}

export default FilterMore;