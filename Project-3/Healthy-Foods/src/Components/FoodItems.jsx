import ErrorMessage from "./ErrorMessage";
import ItemsList from "./ItemsList";
import FoodInput from "./FoodInput";
import { useState } from "react";
let FootItems = ({Items, setFoodItemsData}) => {
    let [textStateVal, setTextState] = useState("")

    const onKeyDown = (event) => {
        if(event.key === "Enter"){
            console.log(event.target.value);
            let netItemVal = event.target.value;
            let newItemsArr = [...Items, netItemVal];
            setFoodItemsData(newItemsArr)
            event.target.value = ""
        }
    }

    let [activeItems, setActiveItems] = useState([]);
    const processActive = (i, e) => {
        let newActiveItemVal = e.target.value;
        setActiveItems([...newActiveItemVal, i])
    }

    return (
        <>
            <FoodInput handledOnKeyDown={onKeyDown}/>
            <ErrorMessage Items={Items}/>
            <p>{textStateVal}</p>
            <ul className="list-group"> {
                Items.map((item) => (
                    <ItemsList 
                        key={item}
                        item={item}
                        btnActive={activeItems.includes(item)}
                        handleBuyBtn={(et)=>processActive(item, et)} />
                ))}
            </ul>
        </>
    );
}

export default FootItems;