import { useContext } from "react";
import CatalogContext from "../../../contexts/catalogContext";

import "./DropdownOption.css"

function DropdownOption(data) {
    const type = data.data.type;
    const label = data.data.label;
    const value = data.data.value;

    const {
        changeActiveProviderHandler,
        changeActiveGenreHandler,
    } = useContext(CatalogContext);

    return (
        <>
            {type == "provider" &&
                <div className="dropdown-option" onClick={() => changeActiveProviderHandler(value)}>
                    <img src={data.data.icon} alt="" className="dropdown-option-image"/>
                    <label>{label}</label>
                </div>}

            {type == "genre" &&
                <div className="dropdown-option"  onClick={() => changeActiveGenreHandler(label)}>
                    <label>{label}</label>
                </div>}
        </>
    )
}

export default DropdownOption;