import Dropdown from "../Components/Dropdwon";
import { useState, useSyncExternalStore } from "react";

function DropdownPage () {

    const [selection, setSelection] = useState(null)

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        { label: "Acura", value: "RSX_TypeS" },
        { label: "Audi", value: "RS5" },
        { label: "BMW", value: "335i" },
        { label: "Honda", value: "Civic si" },
    ];


    return (
        <div className="flex">
            < Dropdown options={options} value={selection} onChange={handleSelect}/>
            {/* < Dropdown options={options} value={selection} onChange={handleSelect}/> */}
        </div>
    );

};
 

export default DropdownPage;