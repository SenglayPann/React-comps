import useCounter from '../hooks/useCounter'
function CounterPage({ initialCount }) {
    const { count, handleClick } = useCounter(initialCount);

    return (
        <div>
            <h1>Count is {count}</h1>
            <button className='border' onClick={ handleClick }>increase</button>
        </div>
    )
}

export default CounterPage