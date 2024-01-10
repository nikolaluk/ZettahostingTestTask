import arrowImg from "../../../assets/rmx-arrow-down-s-line.svg";

import "./Dropdown.css"

function Dropdown() {
    return(
        <div className="dropdown">
            <label className="label">Label:</label>
            <label className="value">value</label>
            <img src={arrowImg}/>
        </div>
    )
}

export default Dropdown;