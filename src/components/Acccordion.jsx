import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpandAcc = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index)
    }

    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const content = isExpanded && <div 
                                            className=" p-5"
                                            >{item.content}</div>;
        const icon = <span>{ isExpanded ? <TiArrowSortedUp /> : <TiArrowSortedDown />}</span>
        return (
            <div 
                key={item.id}
                >
                <div 
                    onClick={() => handleExpandAcc(index)}
                    className=" flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer"
                    >
                        {item.label} { icon }
                    </div>
                {content}
            </div>
        )
    })

    return (
        <div 
            className="border-x border-t rounded"
            >{renderItems}</div>
    )
}

export default Accordion;