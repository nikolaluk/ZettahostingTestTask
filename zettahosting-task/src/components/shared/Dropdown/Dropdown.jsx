import arrowImg from "../../../assets/rmx-arrow-down-s-line.svg";

import "./Dropdown.css"

function Dropdown(data) {
    const label = data.data.label;

    return(
        <div className="dropdown">
            <label className="label">{label}:</label>
            <label className="value">all</label>
            <img src={arrowImg}/>
        </div>
    )
}

export default Dropdown;