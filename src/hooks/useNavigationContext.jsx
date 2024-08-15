import NavigationContext from "../context/navigation";
import { useContext } from "react";

const useNavigationContext = () => {
    return useContext(NavigationContext);
}

export default useNavigationContext