import "./FilterTab.css"

function FilterTab(data) {
    const content = data.data.content;
    const color = data.data.color;

    return(
        <div className={`filter-tab ${color}`}>
            <label>{content}</label>
        </div>
    )
}

export default FilterTab;