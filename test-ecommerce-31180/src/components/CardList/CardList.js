import { useState, useEffect } from 'react';
import CardItem from '../Card/Card'
import { Grid } from '@mui/material';
import productos from "../../utils/productsMock"
import { useParams } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardList = ({title}) => {
    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect( () => {
        setProducts([])
//         getProducts()
        // .then( (response) => {
            category ? filterByCategory(productos, category) : setProducts(productos)
        // })
    }, [category])

    
    // const getProducts = () => {
    //     return new Promise( (resolve, reject) => {
    //             resolve(productos)
    //     })
    // }  

    const filterByCategory = (array, category) => {
        return array.map( (item) => {
            if(item.category === category) {
                return setProducts(products => [...products, item])
            }
        })
    }
    return(
        <>
        <h2>{title}</h2>
        <Grid container spacing={2}>
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            modules={[Pagination, Navigation]}
            navigation={true}            
        >
            {
                products.map( ({title, price, image, id, stock}) => {
                    return(
                        <SwiperSlide key={id}>
                            <CardItem 
                                title={title} 
                                price={price} 
                                image={image} 
                                stock={stock} 
                                id={id}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>

        </Grid>
        </>
    )
}

export default CardList