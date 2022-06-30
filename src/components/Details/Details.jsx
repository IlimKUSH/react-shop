import { Box, Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/ProductsContext";
import Loader from "../Loader/Loader";

const Details = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return oneProduct ? (
    <Container>
      <Box>
        <Typography variant="h4">{oneProduct.title}</Typography>
        <Typography variant="h5">{oneProduct.description}</Typography>
        <Typography variant="h4">{oneProduct.price}</Typography>
        <img src={oneProduct.image} width="20%" alt="" />
      </Box>
    </Container>
  ) : (
    <Loader />
  );
};

export default Details;
