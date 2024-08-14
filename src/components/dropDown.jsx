import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Panel from "./Panel";

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
            <Panel className="flex justify-between items-center cursor-pointer " onClick={ () => handleOpen() }>{value} {icon}</Panel>
            { isOpen && <Panel className=" absolute top-full ">{ renderOptions }</Panel>}
        </div>
    )
}

export default DropDown;