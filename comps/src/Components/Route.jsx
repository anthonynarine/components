import { useContext } from "react";
import NavigationContext  from "../contex/navigation";

function Route(path, children){

    const { currentPath } = useContext(NavigationContext);
    if (path === currentPath) {
        return children
    }

    return;
};

export default Route;