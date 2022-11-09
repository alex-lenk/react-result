import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const imgUrl = 'https://picsum.photos/200'

    const formatCount = () => {
        return !count ? 'empty' : count
    }

    const getBadgeClasses = () => {
        return 'badge m-2 ' + (!count ? 'bg-warning' : 'bg-primary')
    }

    const handlerIncrement = () => {
        setCount(count + 1)
        setCount((prevState) => prevState + 1)
    }

    const handlerDecrement = () => {
        if (!count) return false
        setCount(count - 1)
    }

    return (
        <>
            <div className="mb-4"><img src={imgUrl} alt=""/></div>

            <button className='btn btn-primary btn-sm m-2' onClick={handlerDecrement}>-</button>
            <span className={getBadgeClasses()}>{formatCount()}</span>
            <button className='btn btn-primary btn-sm m-2' onClick={handlerIncrement}>+</button>
        </>
    )
}

export default Counter
