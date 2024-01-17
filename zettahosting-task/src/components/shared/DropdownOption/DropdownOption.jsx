import "./DropdownOption.css"

function DropdownOption(data) {
    const label = data.data.label;
    const value = data.data.value;
    const handler = data.data.handler;
    const icon = data.data.icon;

    //those options are almost the same, the only difference is the image and the onClick function
    //add the function as a param to the component and display an image only if data.data.icon exists and this will get way easier to manage
    return (
        <div className="dropdown-option" onClick={() => handler(value ? value : label)}>
            {icon && <img src={icon} alt="" className="dropdown-option-image" />}
            <label>{label}</label>
        </div>
    )
}

export default DropdownOption;
