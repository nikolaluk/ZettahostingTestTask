import { useContext } from "react";
import "./FilterTab.css"
import CatalogContext from "../../../contexts/catalogContext";

function FilterTab(data) {
    const content = data.data.content;

    const { changeActiveFilterHandler, activeFilter } = useContext(CatalogContext);

    return(
        <div className={`filter-tab ${activeFilter == content ? "active" : ""}`}  onClick={() => changeActiveFilterHandler(content)}>
            <label>{content}</label>
        </div>
    )
}

export default FilterTab;