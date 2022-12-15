import React from 'react'

export const CurrencyMenu = ({ setCurrency }) => {
    const changeCurrency = (curr) => {
        setCurrency(curr)
    }
    return (
        <div>
            <button type="button" onClick={() => changeCurrency('USD')}>
                USD
            </button>
            <button type="button" onClick={() => changeCurrency('EUR')}>
                EUR
            </button>
            <button type="button" onClick={() => changeCurrency('UAH')}>
                UAH
            </button>
            <button type="button" onClick={() => changeCurrency('ZL')}>
                ZL
            </button>
        </div>
    )
}
