import { useState } from "react";
import "./FilterTab.css"

function FilterTab(data) {
    const [active, setActive] = useState(false);
    const content = data.data.content;

    //USE CONTEXT FOR ACTIVE

    function handleClick() {
        setActive(true);
    }

    return(
        <div className={`filter-tab ${active}`} onClick={handleClick}>
            <label>{content}</label>
        </div>
    )
}

export default FilterTab;