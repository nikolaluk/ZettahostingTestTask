import "./DropdownOption.css"

function DropdownOption(data) {
    const label = data.data.label;
    const value = data.data.value;
    const handler = data.data.handler;
    const icon = data.data.icon;

    //FIX: Significantly shortened dropdown option markup
    return (
        <div className="dropdown-option" onClick={() => handler(value ? value : (label == "All" ? null : label))}>
            {icon && <img src={icon} alt="" className="dropdown-option-image" />}
            <label>{label}</label>
        </div>
    )
}

export default DropdownOption;
