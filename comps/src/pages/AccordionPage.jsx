// import Button from "./Components/Button";
import { HiBellAlert, HiCloudArrowDown, HiCircleStack  } from "react-icons/hi2";
import Accordion from "../components/Accordion";

function AccordionPage () {
    const items = [
    {
        id: "l3adsk6j",    
        label: "Carotid Ultrasound",
        content: "IDC 10 Codes 93925, Exam time 45:00 minutes",
    },
    {
        id: "ajflasj200",    
        label: "Renal Ultrasound",
        content: "IDC 10 Codes 93878, Exam time 60:00 minutes",
    },
    {
        id: "ad30klk", 
        label: "Venous Ultrasound",
        content: "IDC 10 Codes 93970, Exam time 45:00 minutes",
    },

    ];

    return (
    <Accordion items={items}/>
   )
};

export default AccordionPage;