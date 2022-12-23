import classNames from "classnames";
// import  { useContext } from "react";
// import NavigationContext from "../contex/navigation";
import useNavigation from "../hooks/use-navitation"; //replace above two imports w/ custom hook



// link Component is used to override normal navigation
// function goal is to make sure that clicking on an anchor
//element does not trigger a total page refresh

function Link({ to, children }) {

    // reaching into context
    const { navigate } = useNavigation();

    const classes = classNames("text-blue-500");
    
    const handleClick = (event) => {
    //this if statement allows for a new windon on ctrl/command clicks
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDevault();


        navigate(to);
    }

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>

};

export default Link;