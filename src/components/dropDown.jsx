import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

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
    
    const icon = !isOpen ? <GoChevronDown /> : <GoChevronUp />

    const renderOptions = options.map(option => {
        return (
            <div className=" hover:bg-sky-100 rounded cursor-pointer p-1" key={ option.value } onClick={ () => handleOpen(option.label) }>{ option.label }</div>
        )
    })

    return (
        <div className=" w-48 relative">
            <div className=" flex justify-between items-center cursor-pointer border rounded shadow bg-white p-3 w-full" onClick={ () => handleOpen() }>{value} {icon}</div>
            { isOpen && <div className=" absolute top-full border p-3 shadow bg-white w-full">{ renderOptions }</div>}
        </div>
    )
}

export default DropDown;