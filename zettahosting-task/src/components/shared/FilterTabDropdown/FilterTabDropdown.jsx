import CatalogContext from "../../../contexts/CatalogContext";
import arrowImg from "../../../assets/rmx-arrow-down-s-line white.svg";

import { useContext, useEffect, useRef, useState } from "react";

import "./FilterTabDropdown.scss"

function FilterMore(data) {
    const content = data.data.content;
    const options = data.data.options;

    const [optionsVisible, setOptionsVisible] = useState(false);
    const dropdownRef = useRef(null);

    const { activeFilter } = useContext(CatalogContext);

    const filterValues = ["Favorites", "Popular", "20% Cash Back"];

    function closeOptionsOnOutsideClick(event) {
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
            <div className="dropdown-wrapper">
                <div 
                    className={`filter-more ${content == "All" ? "active" : (activeFilter != null && !filterValues.includes(activeFilter) ? "active" : "")}`} 
                    onClick={dropdownClickHandler} 
                    ref={dropdownRef}
                >
                    <label className="dropdown-value">{content == "All" ? (activeFilter ? activeFilter : "All") : (activeFilter != null && !filterValues.includes(activeFilter) ? activeFilter : "More")}</label>
                    <img src={arrowImg} />
                </div>
                {optionsVisible &&
                    <div className="dropdown-options-container">
                        {options}
                    </div>
                }
            </div>
        </>
    )
}

export default FilterMore;
