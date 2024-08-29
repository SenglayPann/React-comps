import { useEffect, useState } from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count)
    },[count]);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    }

    const addBy = (amount) => {
        setCount(count + amount);
    }

    return {
        count, 
        increment,
        decrement,
        addBy
    };
}

export default useCounter