import { useContext, useEffect, useRef, useState } from "react";

import arrowImg from "../../../assets/rmx-arrow-down-s-line.svg";

import CatalogContext from "../../../contexts/CatalogContext";
import DropdownOption from "../DropdownOption/DropdownOption";

import jsonData from "../../../data/data.json"

import "./Dropdown.css"

function Dropdown(data) {
    const label = data.data.label;
    const compact = data.data.compact;

    const providers = jsonData.providers;

    const [optionsVisible, setOptionsVisible] = useState(false);
    const dropdownRef = useRef(null);

    //combined
    const { activeProvider, activeGenre } = useContext(CatalogContext);

    //instead of loading all providers every time, add a variable that comes from outside that contains the elements of the dropdown
    //this will make the component more abstract and will allow the easier creation of dropdowns when needed
    //and also you won't need to make the checks by label below
    const dropdownProviderOptions = providers.map(provider => {
        //provider.name is already a string
        return <DropdownOption key={provider.id} data={{ type: "provider", label: provider.name, icon: provider.logo, value: provider.id }} />
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
            {/*You have too much code repetition in here, you may miss to update one of the version when making a change*/}
            {!compact ?
                <div className="dropdown" onClick={dropdownClickHandler} ref={dropdownRef}>
                    <label className="dropdown-label">{label}:</label>

                    {label == "By provider" &&
                        <label className="dropdown-value">{activeProvider ? activeProvider.name : "all"}</label>
                    }

                    {label == "By genre" &&
                        <label className="dropdown-value">{activeGenre}</label>
                    }

                    <img className="dropdown-image" src={arrowImg} />
                </div> :

                <div className="dropdown" onClick={dropdownClickHandler} ref={dropdownRef}>
                    {label == "By provider" &&
                        <label className="dropdown-value">{activeProvider ? activeProvider.name : "all providers"}</label>
                    }

                    {label == "By genre" &&
                        <label className="dropdown-value">{activeGenre == "all" ? "all genres" : activeGenre}</label>
                    }

                    <img className="dropdown-image" src={arrowImg} />
                </div>
            }



            {/* Options */}
            {label == "By provider" && optionsVisible && (
                <div className="dropdown-options-container">
                    {dropdownProviderOptions}
                </div>
            )}

            {label == "By genre" && optionsVisible && (
                <div className="dropdown-options-container">
                    <DropdownOption data={{ type: "genre", label: "Poker" }} />
                    <DropdownOption data={{ type: "genre", label: "Slot" }} />
                    <DropdownOption data={{ type: "genre", label: "Blackjack" }} />
                    <DropdownOption data={{ type: "genre", label: "Rulet" }} />
                </div>
            )}
        </div>
    )
}

export default Dropdown;
