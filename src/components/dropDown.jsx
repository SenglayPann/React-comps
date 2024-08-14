import { useState } from "react";

function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleSetSelect = (nextOption) => {
        setSelectedOption(nextOption)
    }

    const handleOpen = (nextOption) => {
        setIsOpen((currentIsOpen) => !currentIsOpen);

        if (nextOption) {
            onChange(nextOption);
        }
    }

    const renderOptions = options.map(option => {
        return (
            <div key={ option.value } onClick={ () => handleOpen(option.label) }>{ option.label }</div>
        )
    })

    return (
        <div>
            <div onClick={ () => handleOpen() }>{value}</div>
            { isOpen && <div>{ renderOptions }</div>}
        </div>
    )
}

export default DropDown;