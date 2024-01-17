import { useContext } from "react";
import CatalogContext from "../../../contexts/CatalogContext";

import "./DropdownOption.css"

function DropdownOption(data) {
    const type = data.data.type;
    const label = data.data.label;
    const value = data.data.value;

    const {
        changeActiveFilterHandler,
        changeActiveProviderHandler,
        changeActiveGenreHandler,
    } = useContext(CatalogContext);

    //those options are almost the same, the only difference is the image and the onClick function
    //add the function as a param to the component and display an image only if data.data.icon exists and this will get way easier to manage
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
            {type == "filter" &&
                <div className="dropdown-option"  onClick={() => changeActiveFilterHandler(label)}>
                    <label>{label}</label>
                </div>}
        </>
    )
}

export default DropdownOption;
