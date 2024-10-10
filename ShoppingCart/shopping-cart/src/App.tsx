import { useState } from "react";
import { useQuery } from "react-query";

import{ Grid,Drawer,Badge, LinearProgress}  from "@material-ui/core";
import Item from "./Item/item";

import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

import { Wrapper } from "./App.styles";

export type CartItemType={
  id:number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string;
  amount:number;
}

const getProducts= async():Promise<CartItemType[]>=> await(await fetch("https://fakestoreapi.com/products")).json();

export function App() {

  const[cartOpen,setCartOpen]=useState(false);
  const [cartItems,setCartItems]=useState([] as CartItemType[]);

  const {data,isLoading,error}=useQuery<CartItemType[]>("products",getProducts);
  console.log(data);

const getTotalItems=()=>null;

const handleAddToCart=(clickedItem:CartItemType)=>null;

const handleRemoveFromCart=()=>null;

if(isLoading) return <LinearProgress/>;
if(error) return <div>Something is wrong...!</div>;

  return (
    <Wrapper>

      <Drawer anchor="right" open={cartOpen} onClose={()=>setCartOpen(false)}>
        Cart Goes Here!
      </Drawer>
      <Grid container spacing ={3}>
        {data?.map(item=>(
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}></Item>  
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}


