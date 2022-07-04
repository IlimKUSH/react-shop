import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { cartContext } from "../../contexts/cartContext";
import Loader from "../Loader/Loader";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const { getCart, cart } = React.useContext(cartContext);
  React.useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  const navigate = useNavigate();
  const { deleteFromCart, changeCount } = React.useContext(cartContext);
  return cart ? (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map(row => (
              <TableRow
                key={row.item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.item.title}
                </TableCell>
                <TableCell align="right">{row.item.price}</TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => changeCount(row.count - 1, row.item.id)}>
                    <RemoveIcon />
                  </IconButton>
                  {row.count}
                  <IconButton
                    onClick={() => changeCount(row.count + 1, row.item.id)}>
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">{row.subPrice}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => deleteFromCart(row.item.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => navigate(`/details/${row.item.id}`)}>
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Typography variant="h4">Total: {cart.totalPrice}$</Typography>
      </Box>
    </Container>
  ) : (
    <Loader />
  );
}
