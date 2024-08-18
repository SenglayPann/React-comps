import classNames from "classnames";
import useNavigationContext from "../hooks/useNavigationContext";
function Link({ to, className, activeClassName, children }) {
    const { navigate, currentPath } = useNavigationContext();

    const finalClassName = classNames('text-blue-500', className, to === currentPath && activeClassName )
    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }
        e.preventDefault();

        navigate(to);
    }

    return <a className={finalClassName} href={ to } onClick={handleClick}>{children}</a>
}

export default Link