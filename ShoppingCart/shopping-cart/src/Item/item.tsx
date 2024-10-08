import { Button } from "@material-ui/core";
import { CartItemType } from "../App";
import { Wrapper } from "./items.styles";

type Props={
    item: CartItemType;
    handleAddToCart:(clickedItem:CartItemType)=>void;
}

const Item: React.FC<Props>=({item,handleAddToCart})=>(<Wrapper>
    <img src={item.image} alt={item.title}/>
    <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>£{item.price}</h3>
    </div>
    <button onClick={()=>handleAddToCart(item)}>add to cart</button>
</Wrapper>)

export default Item;