import { useContext, useEffect, useRef, useState } from "react";

import arrowImg from "../../../assets/rmx-arrow-down-s-line.svg";

import CatalogContext from "../../../contexts/CatalogContext";

import "./Dropdown.scss"

function Dropdown(data) {
    const label = data.data.label;
    const compact = data.data.compact;
    const options = data.data.options;

    const [optionsVisible, setOptionsVisible] = useState(false);
    const dropdownRef = useRef(null);

    const { activeProvider, activeGenre } = useContext(CatalogContext);

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
        <div className="dropdown-wrapper">
            {/* Dropdown */}
            <div className="dropdown" onClick={dropdownClickHandler} ref={dropdownRef}>
                {!compact && <label className="dropdown-label">{label}:</label>}

                {label == "By provider" &&
                    <label className="dropdown-value">{activeProvider ? activeProvider.name : (compact ? "all providers" : "all")}</label>
                }

                {label == "By genre" &&
                    <label className="dropdown-value">{activeGenre ? activeGenre : (compact ? "all genres" : "all")}</label>
                }

                <img className="dropdown-image" src={arrowImg} />
            </div>

            {/* Options */}
            {optionsVisible && (
                <div className="dropdown-options-container">
                    {options}
                </div>
            )}
        </div>
    )
}

export default Dropdown;