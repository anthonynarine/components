import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();


function NavigationProvider ( {children}) {
//this piece of stat is only to hande rerender on user clicks back and foward
    const [currentPath, setCurretnPath] = useState(window.location.pathname);

    useEffect (() => {
        const handler = () => {

        }
        window.addEventListener("popstate", handler);

        return () => {
            window.removeEventListener("popstate", handler);
        };

    }, []);

    //prefents browser refresh when user click on a link to a new page
    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurretnPath(to);
    }



    return <NavigationContext.Provider value={{ currentPath, navigate}}>
        {children}
    </NavigationContext.Provider>

};

export {NavigationProvider};
export default NavigationContext;