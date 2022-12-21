import { useContext } from "react";
import NavigationContext from "../contex/navigation";

//function to stop standard navigation. will prevent a page refresh
function Link( {to, children }) {

    const { navigate } = useContext(NavigationContext);


    const handleClick = (event) => {
        event.preventDefault();

        navigate(to);
    };

    return <a onClick={handleClick}>{children}</a>;


};

export default Link;