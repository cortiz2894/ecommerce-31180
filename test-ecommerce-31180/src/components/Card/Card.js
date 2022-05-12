import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';

//Functional Component
const CardItem = ({ image, title, price }) => {
    // console.log("Propiedades de Card: ")
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`} /> 
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <Button variant={'contained'} >Detalle</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardItem