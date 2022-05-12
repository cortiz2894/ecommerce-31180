import CardItem from '../Card/Card'
import { Grid } from '@mui/material';

const CardList = ({title}) => {
    const productos = [
        {
            title : 'Remera Oversize',
            price : 1500,
            image : 'musculosa1.jpeg'
        },
        {
            title : 'Remera Oversize',
            price : 1500,
            image : 'musculosa1.jpeg'
        },
        {
            title : 'Remera Oversize',
            price : 1500,
            image : 'musculosa1.jpeg'
        },
    ]
    return(
        <>
        <h2>{title}</h2>
        <Grid container >
            <Grid item md={3}>
                <CardItem title={"Remera Oversize"} price={2500} image={"musculosa1.jpeg"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Segunda Remera"} price={200} image={"musculosa2.jpeg"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Tercera Remera"} price={3200} image={"remera1.jpg"}/>
            </Grid>
            <Grid item md={3}>
                <CardItem title={"Tercera Remera"} price={3200} image={"remera1.jpg"}/>
            </Grid>
        </Grid>
        </>
    )
}

export default CardList