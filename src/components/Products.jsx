import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchDataGet } from "../fetching/fetchData";
import { Link } from "react-router-dom";

function Products() {
  
  const query = useQuery({
    queryKey: ["products"],
    queryFn: fetchDataGet,
    staleTime: 10000,
  });

  const { data, isLoading, isError, error } = query;
  console.log(query);

  return (
    <div id="root">
      {isLoading && <h1>Loading</h1>}
      {isError && <h1>Error: {error.message}</h1>}
      {data &&
        data.map((item) => (
          <Link to={`${item.id}`} key={item.id}>
            <div>{item.title}</div>
          </Link>
        ))}
    </div>
  );
}

export default Products;
