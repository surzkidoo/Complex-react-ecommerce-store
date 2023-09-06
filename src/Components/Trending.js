import React, { useContext } from "react";
import CardList from "./CardList";
import { ProductContext } from "../productprovider";

export default function Trending() {
  const { product } = useContext(ProductContext);
  return (
    <CardList
      data={{
        color: "white",
        title: "Trending",
        url: "/search/new",
        products: product,
      }}
    />
  );
}
