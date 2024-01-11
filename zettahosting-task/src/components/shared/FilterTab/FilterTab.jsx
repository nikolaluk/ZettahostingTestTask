import { useContext } from "react";
import "./FilterTab.css"
import CatalogContext from "../../../contexts/catalogContext";

function FilterTab(data) {
    const { changeActiveFilterHandler, activeFilter } = useContext(CatalogContext);

    const content = data.data.content;

    return(
        <div className={`filter-tab ${activeFilter == content ? "active" : ""}`}  onClick={() => changeActiveFilterHandler(content)}>
            <label>{content}</label>
        </div>
    )
}

export default FilterTab;