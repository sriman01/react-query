import React from "react";
import { SinglefetchDataGet } from "../fetching/fetchData";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
function Product() {
  const { productID } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", productID],
    queryFn: () => SinglefetchDataGet(productID),
    staleTime: 10000,
  });

  console.log(data);
  return (
    <>
      {isError && <h3>{error.message}</h3>}
      {isLoading && <h3>Loading Product</h3>}
      {data && <div id="root">{data.title}</div>}
    </>
  );
}

export default Product;
