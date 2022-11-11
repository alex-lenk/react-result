import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])
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
    const handlerTagChange = (id) => {
        setTags(prevState => prevState.filter(tag => tag !== id))
        //setTags(['tag4', 'tag5',])
        console.log(id)
    }

    const renderTags = () => {
        if (!tags.length) return 'no tags'

        return tags.map(tag => (
            <li key={tag} className="btn btn-primary btn-sm m-2"
                onClick={() => handlerTagChange(tag)}>{tag}</li>
        ))
    }

    if (tags.length) {
        return <ul>{renderTags()}</ul>
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
