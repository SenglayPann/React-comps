import propTypes from 'prop-types';
function Button({ 
    children ,
    primary,
    secondary,
    success,
    waring,
    danger,
    outlined,
    rounded
}) {
    return (
        <button>{ children }</button>
    );
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, waring, danger }) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!waring) + Number(!!danger);

        if (count > 1) {
            return new Error('Only one of primary secondary sucess danger and warning can be true!')
        }
    }

}

export default Button