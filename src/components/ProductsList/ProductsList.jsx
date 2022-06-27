import { Box, Container } from "@mui/material";
import React, { useContext, useEffect } from "react";

import { productsContext } from "../../contexts/ProductsContext";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const { products, getProducts, deleteProduct } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Box>
        {products.map(item => (
          <ProductCard
            key={item.id}
            item={item}
            deleteProduct={deleteProduct}
          />
        ))}
      </Box>
    </Container>
  );
};

export default ProductsList;
