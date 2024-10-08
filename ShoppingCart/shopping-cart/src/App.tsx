import { useState } from "react";
import { useQuery } from "react-query";

import{ Grid,Drawer,Badge, LinearProgress}  from "@material-ui/core";

import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

import { Wrapper } from "./App.styles";

export type CartItemType={
  id:Number;
  category:String;
  description:String;
  image:String;
  price:Number;
  title:String;
  amount:Number;
}

const getProducts= async():Promise<CartItemType[]>=> await(await fetch("https://fakestoreapi.com/products")).json();

export function App() {

  const {data,isLoading,error}=useQuery<CartItemType[]>("products",getProducts);
  console.log(data);

const getTotalItems=()=>null;

const handleAddToCart=()=>null;

const handleRemoveFromCart=()=>null;

if(isLoading) return <LinearProgress/>;
if(error) return <div>Something is wrong...!</div>;

  return (
    <div className="App">
      Start
    </div>
  );
}


