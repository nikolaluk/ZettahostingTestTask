import { useContext, useEffect, useRef, useState } from "react";
import arrowImg from "../../../assets/rmx-arrow-down-s-line.svg";

import "./Dropdown.css"
import CatalogContext from "../../../contexts/catalogContext";
import DropdownOption from "../DropdownLabel/DropdownOption";

function Dropdown(data) {
    const label = data.data.label;
    const [optionsVisible, setOptionsVisible] = useState(false);
    const dropdownRef = useRef(null);

    const { activeProvider } = useContext(CatalogContext);
    const { activeGenre } = useContext(CatalogContext);

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
            <div className="dropdown" onClick={dropdownClickHandler} ref={dropdownRef}>
                <label className="dropdown-label">{label}:</label>

                {label == "By provider" &&
                    <label className="dropdown-value">{activeProvider}</label>
                }

                {label == "By genre" &&
                    <label className="dropdown-value">{activeGenre}</label>
                }

                <img className="dropdown-image" src={arrowImg} />
            </div>
            {optionsVisible && (
                <div className="dropdown-options-container">
                    <DropdownOption />
                    {/* Add more DropdownOption components as needed */}
                </div>
            )}
        </div>
    )
}

export default Dropdown;