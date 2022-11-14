import { Button, Grid, TextField, Typography, Paper } from "@mui/material";
import React, { useState } from "react";
const AddUser = () => {
  const [users, setUsers] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
  });
  const [errors, setErrors] = useState({});
  const handleOnchnage = (event) => {
    setUsers({
      ...users,
      [event.target.name]: event.target.value,
    });
  };
  const validate = (values) => {
    errors = {};
    if (!values.name == "") {
      errors.name = "Name is required";
    }
    return errors;
  };

  const handleSumbitBtn = (event) => {
    event.preventDefault();
    setErrors(validate(users));
    console.log(users, "USers=======");
  };
  return (
    <>
      <Paper style={{ display: "grid", palaceItems: "center", padding: "4px" }}>
        <Typography
          p={1}
          variant="h4"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Add User
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleOnchnage}
          type="text"
          placeholder="Name"
          name="name"
        />
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleOnchnage}
          type="text"
          placeholder="lastName"
          name="lastName"
        />
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleOnchnage}
          type="email"
          placeholder="email"
          name="email"
        />
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleOnchnage}
          type="number"
          placeholder="Phone Number"
          name="phoneNumber"
        />
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleOnchnage}
          type="text"
          placeholder="Country"
          name="country"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleOnchnage}
              type="text"
              placeholder="State"
              name="state"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={handleOnchnage}
              type="text"
              placeholder="City"
              name="city"
            />
          </Grid>
        </Grid>
        <Button
          sx={{ marginBottom: "10px" }}
          variant="contained"
          size="large"
          color="success"
          fullWidth
          onClick={handleSumbitBtn}
        >
          Sumbit
        </Button>
      </Paper>
    </>
  );
};

export default AddUser;
