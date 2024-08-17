
export default function SingleItem({image, name, price}){
    return (
        <div className="drinkItem">
            <div className="drinkItem_imageContainer">
                <img className="drinksItem_imageContainer-image" src={image} alt="Photo of drink" />
            </div>
            <div className="drinkItem_textContainer">
                <h4 className="drinkItem_textContainer-title">{name}</h4>
                <p className="drinkItem_textContainer-price">{price}</p>
            </div>
        </div>
    )
}

SingleItem.defaultProps = {
    name: "New Name",
    price: "$10000000",
    image: "/images/default.png"
}