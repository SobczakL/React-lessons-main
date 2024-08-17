import SingleItem from "./SingleItem"

const drinkList = [
    {
        id: 1,
        name: "Cold Coffee",
        price: "$4.30",
        image: "/images/cold-coffee.png"
    },
    {
        id: 2,
        name: "Cold Drink",
        price: "$3.99",
        image: "/images/cold-drink.png"
    },
    {
        id: 3,
        name: "Hot Coffee",
        price: "$5.00",
        image: "/images/hot-coffee.png"
    },
    {
        id: 4,
        name: "Specialty Cold Coffee",
        price: "$5.50",
        image: "/images/specialty-cold-coffee.png"
    },
    {
        id: 5,
        name: "Specialty Hot Coffee",
        price: "$5.50",
        image: "/images/specialty-hot-coffee.png"
    },
    {
        id: 6,
        name: "Other Beverages",
        price: "$",
        image: "/images/other.png"
    },
]
export default function ListOfItems(){
    return (
        <div className="drinkList">
            <h1 className="drinkList_title">Drinks</h1>
            <div className="drinkList_listContainer">
                {drinkList.map((drink => (
                    <SingleItem 
                        key={drink.id}
                        name={drink.name}
                        price={drink.price}
                        image={drink.image} 
                    />
                )))}
            </div>
        </div>
    )

}