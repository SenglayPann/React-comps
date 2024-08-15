import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Panel from "./Panel";

function DropDown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = (nextOption) => {
        setIsOpen((currentIsOpen) => !currentIsOpen);

        if (nextOption) {
            onChange(nextOption);
        }
    }
     
    const divEl = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (!divEl?.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler);
        }
    }, [])

    const icon = !isOpen ? <GoChevronDown /> : <GoChevronUp />

    const renderOptions = options.map(option => {
        return (
            <div className=" hover:bg-sky-100 rounded cursor-pointer p-1" key={ option.value } onClick={ () => handleOpen(option.label) }>{ option.label }</div>
        )
    })

    return (
        <div ref={ divEl } className=" w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer " onClick={ () => handleOpen() }>{value} {icon}</Panel>
            { isOpen && <Panel className=" absolute top-full ">{ renderOptions }</Panel>}
        </div>
    )
}

export default DropDown;