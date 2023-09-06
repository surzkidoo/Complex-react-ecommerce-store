import React, { useContext } from "react";
import CardList from "./CardList";
import { ProductContext } from "../productprovider";

export default function TodaysDeal() {
  const { product } = useContext(ProductContext);
  return (
    <>
    <CardList
      data={{
        color: "white",
        title: "Today's Deal",
        url: "/search/new",
        products: product,
      }}
      showBtn
    />
    </>
  );
}
