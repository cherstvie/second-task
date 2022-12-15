import React from 'react'
import { ProductsList } from 'components/Products/ProductsList'
import { CartTotal } from 'components/Cart/CartTotal'
import { CurrencyMenu } from 'components/Currency/CurrencyMenu'

export const App = () => {
    return (
        <>
            <h1>Our shop page</h1>
            <CurrencyMenu />
            <ProductsList />
            <CartTotal />
        </>
    )
}
