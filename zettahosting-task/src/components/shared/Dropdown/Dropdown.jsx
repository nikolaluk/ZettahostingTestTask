import { useContext, useEffect, useRef, useState } from "react";

import arrowImg from "../../../assets/rmx-arrow-down-s-line.svg";

import CatalogContext from "../../../contexts/catalogContext";
import DropdownOption from "../DropdownOption/DropdownOption";

import jsonData from "../../../data/data.json"

import "./Dropdown.css"

function Dropdown(data) {
    const label = data.data.label;

    const providers = jsonData.providers;

    const [optionsVisible, setOptionsVisible] = useState(false);
    const dropdownRef = useRef(null);

    const { activeProvider } = useContext(CatalogContext);
    const { activeGenre } = useContext(CatalogContext);

    const dropdownProviderOptions = providers.map(provider => {
        return <DropdownOption key={provider.id} data={{type: "provider", label: `${provider.name}`, icon: provider.logo, value: provider.id}}/>
    })

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
                <label className="dropdown-label">{label}:</label>

                {label == "By provider" &&
                    <label className="dropdown-value">{activeProvider ? activeProvider.name : "all"}</label>
                }

                {label == "By genre" &&
                    <label className="dropdown-value">{activeGenre}</label>
                }

                <img className="dropdown-image" src={arrowImg} />
            </div>


            {/* Options */}
            {label == "By provider" && optionsVisible && (
                <div className="dropdown-options-container">
                    {dropdownProviderOptions}
                </div>
            )}

            {label == "By genre" && optionsVisible && (
                <div className="dropdown-options-container">
                    <DropdownOption data={{type:"genre", label: "Poker"}}/>
                    <DropdownOption data={{type:"genre", label: "Slot"}}/>
                    <DropdownOption data={{type:"genre", label: "Blackjack"}}/>
                    <DropdownOption data={{type:"genre", label: "Rulet"}}/>
                </div>
            )}
        </div>
    )
}

export default Dropdown;