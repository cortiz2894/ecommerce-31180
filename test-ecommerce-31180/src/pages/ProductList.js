import { useEffect, useState } from "react"
import CardList from "../components/CardList/CardList"
import Filters from '../components/Filters/Filters'

const ProductList = () => {
    return(
        <div className='general-container list-product-container'>
            <Filters />
            <div>
                <CardList title={'LISTADO DE PRODUCTOS'}/>
            </div>
        </div>
    )
}

export default ProductList