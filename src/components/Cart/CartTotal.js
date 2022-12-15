import React, { useState } from 'react'

export const CartTotal = () => {
    const [count, setCount] = useState(0)
    return <div>total : {count}</div>
}
