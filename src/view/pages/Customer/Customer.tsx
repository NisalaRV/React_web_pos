import React from "react";
import {
    Box,
    Grid,
    TextField,
} from "@mui/material";
import Header from "../../common/Header/Header";
export default function Customer() {
    return(
        <>
        < Header/>
            <Grid lg={5} md={5} sm={10} xs={11} py={8} ml={5}>
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        boxShadow: 2,
                        borderRadius: 2,
                        p: 2,
                        width: "30%",
                    }}
                >
                <Box
                    component="form"
                    action="customer"
                    id="customerForm"
                    sx={{
                        "& .MuiTextField-root": { width: "80%", m: 2 },
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
                </Box>
            </Box>
    </Grid>
    </>
    )
};
