import { useContext, useEffect, useRef, useState } from "react";

import arrowImg from "../../../assets/rmx-arrow-down-s-line.svg";
import OneByTwo from "../../../assets/icons/1x2.svg";
import Amatic from "../../../assets/icons/amatic.svg";
import Apollogames from "../../../assets/icons/apollogames.svg";
import ClipPathGroup from "../../../assets/icons/Clip path group.svg";
import TwoByTwo from "../../../assets/icons/Group.svg";

import CatalogContext from "../../../contexts/catalogContext";
import DropdownOption from "../DropdownLabel/DropdownOption";

import "./Dropdown.css"

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

            {label == "By provider" && optionsVisible && (
                <div className="dropdown-options-container">
                    <DropdownOption data={{type:"provider", label: "1x2 Network (51)", icon: OneByTwo}}/>
                    <DropdownOption data={{type:"provider", label: "2 by 2 games (31)", icon: Amatic}}/>
                    <DropdownOption data={{type:"provider", label: "Amatic", icon: Apollogames}}/>
                    <DropdownOption data={{type:"provider", label: "Apollo Games", icon: ClipPathGroup}}/>
                    <DropdownOption data={{type:"provider", label: "Aspect Gameing", icon: TwoByTwo}}/>
                    {/* Add more DropdownOption components as needed */}
                </div>
            )}

            {label == "By genre" && optionsVisible && (
                <div className="dropdown-options-container">
                    <DropdownOption data={{type:"genre", label: "Poker"}}/>
                    <DropdownOption data={{type:"genre", label: "Slot"}}/>
                    <DropdownOption data={{type:"genre", label: "Blackjack"}}/>
                    <DropdownOption data={{type:"genre", label: "Rulet"}}/>
                    {/* Add more DropdownOption components as needed */}
                </div>
            )}
        </div>
    )
}

export default Dropdown;