const ItemDetail = ({data}) => {
    console.log("Data desde ItemDetail: ", data)
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.price}</p>
        </div>
    )
}

export default ItemDetail