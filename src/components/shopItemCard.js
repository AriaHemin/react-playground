function ShopItemCard(props){
    return(
    <div className="w-300 h-450 m-2 bg-red-300 hover:w-350 hover:h-500">
        <div>{props.img}</div>
        <div className="flex flex-row p-1" >
            <div className="m-1">{props.title}</div>
            <div className="m-1">{props.price}</div>
            <div className="m-1">{props.condition}</div>
        </div>
    </div>
    )
}

export default ShopItemCard;
