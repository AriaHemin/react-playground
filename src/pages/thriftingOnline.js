import { useState } from "react";
import ShopItemCard from "../components/shopItemCard";

function ThriftingOnline(){
    const [shopItems, setShopItems] = useState([
        {
            title: "vans",
            img: "nice jacket",
            condition: "9/10",
            price: "15 000",
            key: "1"

        },
        {
            title: "addidas",
            img: "nice shoe",
            condition: "10/10",
            price: "10 000",
            key: "2"
        },
        {
            title: "addidas",
            img: "nice t shirt",
            condition: "10/10",
            price: "9 000",
            key: "3"
        },
        {
            title: "nike",
            img: "nice socks",
            condition: "",
            price: "2 000",
            key: "4"
        },{
            title: "converse hightop",
            img: "nice shoes",
            condition: "8/10",
            price: "20 000",
            key: "5"
        },
        {
            title: "rolex",
            img: "nice rolex watch",
            condition: "10/10",
            price: "60 000",
            key: "6"
        },{
            title: "t shirt",
            img: "supreme",
            condition: "10/10",
            price: "30 000",
            key: "7"
        },
        {
            title: "channel",
            img: "nice bag",
            condition: "9/10",
            price: "10 000",
            key: "8"
        }
    ]);
    return(
        <>
            <div className="flex" >{
                shopItems.map((shopItem)=>{return(
                    <ShopItemCard 
                        title={shopItem.title} 
                        price={shopItem.price} 
                        img={shopItem.img} 
                        condition={shopItem.condition}
                        key={shopItem.key} />
                )})}
            </div>
        </>
    );
}

export default ThriftingOnline;