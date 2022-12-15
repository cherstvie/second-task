import React from 'react'

export const ProductListItem = ({
    name,
    description,
    currency,
    price,
    total,
    setTotal,
}) => {
    switch (currency) {
        case 'USD':
            price = price * 1.05
            break
        case 'UAH':
            price = price * 41
            break
        case 'ZL':
            price = price * 5.8
            break
        default:
            price = price
            break
    }

    const addToCart = () => {
        setTotal(total + price)
    }

    return (
        <>
            <form>
                <h4>{name}</h4>
                <p>{description}</p>
                <div>
                    {currency} {price}
                </div>
                <button type="button" onClick={() => addToCart()}>
                    Buy
                </button>
            </form>
        </>
    )
}
