import './Card.css'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import Modal from '../Modal/Modal'
import { Link } from 'react-router-dom';

//Functional Component
const CardItem = ({ image, title, price, stock, id}) => {
    console.log("producto id:", id)
    return(
        <Card sx={{ minWidth: 275 }} className="card-item-container">
            <CardContent>
                <div className="card-item">
                    <div className="card-item__img-box">
                        <img src={`/${image}`} alt={"producto"}/> 
                        <Button variant={'contained'} className="card-btn-details">
                            <Link to={`/product/${id}`}>Ver Detalle</Link>
                        </Button>
                    </div>
                    <div className='card-item__data-box'>
                        <div className='card-info-data'>
                            <p>{title}</p>
                            <span>$ {price}</span>
                        </div>
                        <div className='color-group-selector'>
                            <button className='color-selector black'></button>
                            <button className='color-selector green'></button>
                            <button className='color-selector red'></button>
                        </div>
                        <Button variant={'contained'} className="card-item-button">Agregar al carrito</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem