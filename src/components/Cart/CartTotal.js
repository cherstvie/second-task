import React from 'react'

export const CartTotal = ({ currency, total }) => {
    switch (currency) {
        case 'USD':
            total = total * 1.05
            break
        case 'UAH':
            total = total * 41
            break
        case 'ZL':
            total = total * 5.8
            break
        default:
            total = total
            break
    }

    return <div>total : {total}</div>
}
