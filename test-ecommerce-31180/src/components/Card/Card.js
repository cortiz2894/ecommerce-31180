import './Card.css'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import Modal from '../Modal/Modal'

//Functional Component
const CardItem = ({ image, title, price, stock }) => {
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(1)

    const handleClose = () => {
        setOpen(false)
    }
    const addCount = () => {
        console.log("stock: ", stock)
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const removeCount = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return(
        <Card sx={{ minWidth: 275 }} className="card-item-container">
            <CardContent>
                <div className="card-item">
                    <div className="card-item__img-box">
                        <img src={`./${image}`} alt={"producto"}/> 
                        <Button variant={'contained'} className="card-btn-details">Ver Detalle</Button>
                    </div>
                    <div className='card-item__data-box'>
                        <div className='card-info-data'>
                            <p>{title}</p>
                            <span>$ {price}</span>
                        </div>
                        <div className='count-item'>
                            <Button onClick={removeCount}>-</Button>
                            <p>{count}</p>
                            <Button onClick={addCount}>+</Button>
                        </div>
                        <Button variant={'contained'} className="card-item-button">Comprar</Button>
                    </div>
                </div>
            </CardContent>
            {open && (

                <Modal handleClose={handleClose} open={open}>
                <h2>Detalle</h2>
                <img src={`./${image}`} alt={"producto"} /> 
                </Modal>
            ) }
        </Card>
    )
}

export default CardItem