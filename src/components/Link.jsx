import classNames from "classnames";
import useNavigationContext from "../hooks/useNavigationContext";
function Link({ to, children }) {
    const { navigate } = useNavigationContext();

    const finalClassName = classNames('text-blue-500')
    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            return;
        }
        e.preventDefault();

        navigate(to);
    }

    return <a className={ finalClassName} href={ to } onClick={handleClick}>{children}</a>
}

export default Link