import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            const newPath = window.location.pathname;
            setCurrentPath(newPath);
        };

        window.addEventListener('popstate', handler);
        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, [])

    const navigate = (to) => {
        window.history.pushState({}, '', to)
        setCurrentPath(to)
    }

    

    return (
        <NavigationContext.Provider value={ { currentPath, navigate } }>
            { children }
        </NavigationContext.Provider>
    )
}

export { NavigationProvider };
export default NavigationContext;