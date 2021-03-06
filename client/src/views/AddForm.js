import React from "react";
import { Container, TextField, Stack, Typography, Card, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPhones, addPhone } from "../store/actions/phoneAction";

export default function AddForm() {
  const [newPhone, setNewPhone] = useState({
    name: "",
    price: 0,
    brand: "",
    released: "",
  });
  const dispatch = useDispatch();

  const newPhoneHandler = (event) => {
    const { value, name } = event.target;
    const newInput = {
      ...newPhone,
    };
    newInput[name] = value;
    setNewPhone(newInput);
  };

  const navigate = useNavigate();
  const addPhoneHandler = () => {
    dispatch(addPhone(newPhone))
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    dispatch(fetchPhones());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-evenly", mt: 5 }}>
        <Card sx={{ p: 2 }}>
          <Stack spacing={2}>
            <Typography variant="h4">Add Phone</Typography>
            <TextField value={newPhone.name} onChange={newPhoneHandler} name="name" label="Name" variant="filled" sx={{ width: 500 }} />
            <TextField value={newPhone.price} onChange={newPhoneHandler} name="price" label="Price" variant="filled" sx={{ width: 500 }} />
            <TextField value={newPhone.brand} onChange={newPhoneHandler} name="brand" label="Brand" variant="filled" sx={{ width: 500 }} />
            <TextField value={newPhone.released} onChange={newPhoneHandler} name="released" label="Released Year" variant="filled" sx={{ width: 500 }} />
            <Button onClick={addPhoneHandler} variant="contained">
              Add Phone
            </Button>
          </Stack>
        </Card>
      </Container>
    </>
  );
}
