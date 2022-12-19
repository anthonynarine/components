import { useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

function Dropdown ({ options, value, onChange }) {
// we want to list out the  lable and value from the options array
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    };

    const renderedOptions = options.map((option) =>{
        return <div className="hover:bg-sky-100 rounded coursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    });


    return(     
    <div className="w-48 relative">
        <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>
            {value?.label || "Select..."}
            <FaAngleDoubleDown/>
        </div>
        {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
    </div>
    );
};


export default Dropdown;