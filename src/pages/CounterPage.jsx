// import { useState } from 'react';
// import useCounter from '../hooks/useCounter'
import { useReducer } from "react";

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const INCREASE_COUNT_BY = 'increase-count-by';
const CHANGE_VALUE_TO_ADD = 'change-value-to-add';

const reducer = (state, action) => {
    // if (action.type === INCREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count : state.count + 1
    //     }
    // }

    // if (action.type === DECREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count : state.count - 1
    //     }
    // }

    // if (action.type === INCREASE_COUNT_BY) {
    //     return {
    //         ...state,
    //         count: state.count + action.payload
    //     }
    // }

    // if (action.type === CHANGE_VALUE_TO_ADD) {
    //     return {
    //         ...state,
    //         valueToAdd: action.payload
    //     }
    // }

    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count : state.count + 1
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count : state.count - 1
            };
        case CHANGE_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload
            };
        case INCREASE_COUNT_BY:
            return {
                ...state,
                count: state.count + action.payload
            };
        default:
            throw new Error('unexpected action type' + action.type)
    }
}
function CounterPage({ initialCount }) {
    // const [amount, setAmount] = useState(null);
    // const [count, setCount] = useState(initialCount);
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })
    // useEffect(() => {
    //     console.log(state.count)
    // },[count]);

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        });
    }

    const handleChange = (valueToAdd) => {
        dispatch({
            type: CHANGE_VALUE_TO_ADD,
            payload: valueToAdd
        });
    }

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch({
            type: INCREASE_COUNT_BY,
            payload: state.valueToAdd
        });

        dispatch({
            type: CHANGE_VALUE_TO_ADD,
            payload: 0
        });
    }

    return (
        <div>
            <h1>Count is {state.count}</h1>
            <button className='border' onClick={ increment }>increase</button>
            <button className='border' onClick={ decrement }>decrease</button>
            <br />
            <h1>Ad alot</h1>
            <input className='border' type='number' value={state.valueToAdd || ''} onChange={ (e) => handleChange(parseInt(e.target.value) || 0)}/>
            <button className='border' onClick={handleAdd}>Add it</button>
        </div>
    )
}

export default CounterPage