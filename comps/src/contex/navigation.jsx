
// The navigation function will do 2 things.

// its going to update the current piece of state and the current 
// path piece of state. 

// we need to make sure that we update the address bar and 
// update current path


//Function to make sure user clicking on a link does not cause a page refresh.

import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider( {children}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

// handles user clicking back + foward w/o causing page refresh + /w clean up func
    useEffect (() => {
        const handler = () => {
            setCurrentPath(window.location.pathname)

        };
        window.addEventListener("popstate", handler);

        return () => {
            window.removeEventListener("popstate", handler);
        };
    }, []); 

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };



    return <NavigationContext.Provider value={{currentPath, navigate }}>
        {children}
        {/* {currentPath} */}
        {/* <button onClick={() => navigate("./accordion")}>addordion</button>
        <button onClick={() => navigate("./dropdown")}>dropdown</button> */}
    </NavigationContext.Provider>

};

export { NavigationProvider };
export default NavigationContext;

// whenever we navigate the user around using pushState function, if a user
// clicks on a foward or back button, that will trigger pop state event so we
// listen for that then update the currentPath piece of state which will cause 
// a re-render