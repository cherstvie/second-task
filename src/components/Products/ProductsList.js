import React from 'react'
import { productsArray } from './productsArray'
import { ProductListItem } from './ProductListItem'
import './ProductsList.css'

export const ProductsList = () => {
    return (
        <div className="row">
            {productsArray.map(({ name, description, currency, price }) => (
                <ProductListItem
                    name={name}
                    description={description}
                    currency={currency}
                    price={price}
                />
            ))}
        </div>
    )
}
