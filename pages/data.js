import React, { useCallback, useState, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import data from "./data.json";

const Data = () => {
  console.log(data.member);
  return (
    <section class="text-gray-700 body-font h-auto sm:h-screen sm:flex sm:items-center">
      {data.member.map((data) => {
        <li>{data.name}</li>;
      })}
    </section>
  );
};
export default Data;
