import CardList from "../components/CardList/CardList"
import { useEffect, useState } from "react"

const Home = () => {
    return(
        <div className='general-container'>
            <CardList title={'ON SALE! 20% OFF'}/>
            <CardList title={'Productos Recomendados'}/>
            <CardList title={'Temporada invierno 2022'}/>
        </div>
    )
}

export default Home