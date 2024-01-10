import React from "react";
import {
    Box,
    Grid,
    TextField,
} from "@mui/material";
import Header from "../../common/Header/Header";
import Button from "@mui/material/Button";
export default function Customer() {
    return(
        <>
        < Header/>
            <h1>Customer</h1>
            <Grid lg={5} md={5} sm={10} xs={11} py={5} ml={5}>
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        boxShadow: 2,
                        borderRadius: 2,
                        p: 2,
                        width: "40%",
                    }}
                >
                <Box
                    component="form"
                    action="customer"
                    id="customerForm"
                    sx={{
                        "& .MuiTextField-root": { width: "90%", m: 2 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        sx={{
                            fontSize: 22,
                            fontWeight: "bold",
                            fontFamily: "Poppines",
                        }}
                        id="txtCusId"
                        name="id"
                        label="Customer ID "
                        placeholder="C00-001"
                        InputProps={{
                            readOnly: true,
                        }}
                        size="small"
                    />

                    <TextField
                        sx={{
                            fontSize: 22,
                            fontWeight: "bold",
                            fontFamily: "Poppines",
                        }}
                        id="txtCusName"
                        name="name"
                        label="Customer Name :"
                        placeholder="Nisala Ravihara"
                        required
                        size="small"
                    />

                    <TextField
                        sx={{
                            fontSize: 22,
                            fontWeight: "bold",
                            fontFamily: "Poppines",
                        }}
                        id="txtCusAddress"
                        name="address"
                        label="Customer Address "
                        placeholder="Ambalangoda"
                        required
                        size="small"
                    />

                    <TextField
                        sx={{
                            fontSize: 22,
                            fontWeight: "bold",
                            fontFamily: "Poppines",
                        }}
                        id="txtCustomerSalary"
                        name="salary"
                        label="Customer Salary "
                        placeholder="50000"
                        required
                        size="small"
                    />
                    <Box
                        sx={{
                            color: "#2c3e50",
                            gap: 2,
                            mr: 2,
                            ml: 2,
                            p: 2,
                            "& button": { m: 1 },
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            id="btnSaveCustomer"
                            sx={{
                                fontWeight: "bold",
                                fontSize: "0.8rem",
                            }}
                        >
                            Save
                        </Button>
                        <Button
                            variant="contained"
                            color="success"
                            id="btnUpdateCustomer"
                            sx={{
                                fontWeight: "bold",
                                fontSize: "0.8rem",
                            }}
                        >
                            Update
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            id="btnDeleteCustomer"
                            sx={{
                                fontWeight: "bold",
                                fontSize: "0.8rem",
                            }}
                        >
                            Delete
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            id="getAllCustomer"
                            sx={{
                                fontWeight: "bold",
                                fontSize: "0.8rem",
                            }}
                        >
                            Get All
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            id="clearAllCustomer"
                            sx={{
                                fontWeight: "bold",
                                fontSize: "0.8rem",
                            }}
                        >
                           Clear All
                        </Button>
                    </Box>
                </Box>
            </Box>
    </Grid>
    </>
    )
};
