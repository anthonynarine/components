// import { useContext } from "react";
// import NavigationContext from "../contex/navigation";
//above imports are replaced with custom hook (useNavigation) logic
import useNavigation from "../hooks/use-navitation";


function Route ({path, children }) {
    const { currentPath } = useNavigation();

    if (path === currentPath) {
        return children;
    }

    return null;   
};


export default Route;