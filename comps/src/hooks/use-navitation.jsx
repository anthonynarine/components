import NavigationContext from "../contex/navigation";
import { useContext } from "react";

function useNavigation () {
    return useNavigation(NavigationContext)
}



export default useNavigation;
