import React from 'react'

export const ProductListItem = ({ name, description, currency, price }) => {
    return (
        <>
            <form>
                <h4>{name}</h4>
                <p>{description}</p>
                <div>
                    {currency} {price}
                </div>
                <button type="button">Buy</button>
            </form>
        </>
    )
}
