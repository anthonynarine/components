import Dropdown from "./Components/Dropdwon";
import { useState, useSyncExternalStore } from "react";

function App () {

    const [selection, setSelection] = useState(null)

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        { label: "Honda", value: "Civic si" },
        { label: "BMW", value: "335i" },
        { label: "Audi", value: "S5" },
        { label: "Audi", value: "RS5" },
    ];


    return (
        < Dropdown
            options={options}
            value={selection}
            onChange={handleSelect}
        />
    );

};
 

export default App;