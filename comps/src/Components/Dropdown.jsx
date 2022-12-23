import { useState, useEffect, useRef } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import Panel from "./Panel";

function Dropdown ({ options, value, onChange }) {
// we want to list out the  lable and value from the options array
    const [isOpen, setIsOpen] = useState(false);

    const divElement = useRef();

    //Document wide click event Handler start //
    useEffect (() =>{
        const handler = (event) => {
            if (!divElement) {
                return;
            };
             
            if (!divElement.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handler, true)
    //Clean-up() gets called e.time dropdown comp is removed from screen
        return () => {
           document.removeEventListener("click", handler); 
        };

    }, []);
    // Document wide click event Handler end //


    const handleClick = () => {
        setIsOpen(!isOpen);
    };


    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    };


    const renderedOptions = options.map((option) =>{
        return (
            <div 
            className="hover:bg-sky-100 rounded coursor-pointer p-1" 
            onClick={() => handleOptionClick(option)}
            key={option.value}>{option.label}
            </div>
        );
    });


    return(     
    <div ref={divElement} className="w-48 relative">
        <Panel
            className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
            {value?.label || "Select..."}
            <FaAngleDoubleDown/>
        </Panel>
        {isOpen &&
         <Panel className="absolute top-full ">
            {renderedOptions}
        </Panel>}
    </div>
    );
};


export default Dropdown;