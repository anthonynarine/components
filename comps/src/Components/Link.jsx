import  { useContext } from "react";
import NavigationContext from "../contex/navigation";

// link Component is used to override normal navigation
// function goal is to make sure that clicking on an anchor
//element does not trigger a total page refresh

function Link({ to, children }) {

    // reaching into context
    const { navigate } = useContext(NavigationContext);
    
    const handleClick = (event) => {
        event.preventDevault();

        navigate(to);
    }

    return <a onClick={handleClick} href={to}>{children}</a>

}

export default Link;