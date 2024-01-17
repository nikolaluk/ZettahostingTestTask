import CatalogContext from "../../../contexts/CatalogContext";

import { useContext } from "react";

import "./FilterTab.css"

function FilterTab(data) {
    const content = data.data.content;

    const { changeActiveFilterHandler, activeFilter } = useContext(CatalogContext);

    return (
        // FIX: altered the class conditions because of activeFilter default value changed to null
        // TODO: theres probably a cleaner way to do the class conditions will check it out
        <div className={`filter-tab ${activeFilter == content ? "active" : activeFilter == null && content == "All" ? "active" : ""}`} onClick={() => changeActiveFilterHandler(content)}>
            <label>{content}</label>
        </div>
    )
}

export default FilterTab;
