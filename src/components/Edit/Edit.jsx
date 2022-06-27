import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const EditProduct = () => {
  // title, price, description, image
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    const newProduct = {
      title,
      description,
      price,
      image,
    };
    console.log(newProduct);
  }

  return (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"} marginTop={"30px"}>
        <Typography variant="h5">Edit product</Typography>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          type={"number"}
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(+e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          label="Image"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <Button onClick={handleSave} variant="outlined" color="primary">
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default EditProduct;
