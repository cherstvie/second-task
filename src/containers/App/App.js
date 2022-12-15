import React, { useState } from 'react'
import { ProductsList } from 'components/Products/ProductsList'
import { CartTotal } from 'components/Cart/CartTotal'
import { CurrencyMenu } from 'components/Currency/CurrencyMenu'

export const App = () => {
    const [total, setTotal] = useState(0)

    const [currency, setCurrency] = useState('EUR')

    return (
        <>
            <h1>Our shop page</h1>
            <CurrencyMenu setCurrency={setCurrency} />
            <ProductsList
                currency={currency}
                total={total}
                setTotal={setTotal}
            />
            <CartTotal currency={currency} total={total} />
        </>
    )
}
