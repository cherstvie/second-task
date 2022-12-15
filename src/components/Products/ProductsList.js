import React from 'react'
import { productsArray } from './productsArray'
import { ProductListItem } from './ProductListItem'
import './ProductsList.css'

export const ProductsList = ({ currency, total, setTotal }) => {
    return (
        <div className="row">
            {productsArray.map(({ id, name, description, price }) => (
                <ProductListItem
                    key={id}
                    id={id}
                    name={name}
                    description={description}
                    currency={currency}
                    price={price}
                    total={total}
                    setTotal={setTotal}
                />
            ))}
        </div>
    )
}
