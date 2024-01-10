import React from "react";
import {
    Box,
    Grid, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow,
    TextField,
} from "@mui/material";
import Header from "../../common/Header/Header";
import Button from "@mui/material/Button";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(code: string, name: string, qty: number, price: number) {
    return { code, name, qty, price };
}

const rows = [
    createData("I00-001", "Carrot",100,20),
    createData("I00-002", "Carrot",80,80),
    createData("I00-003", "Carrot", 100, 80),
    createData("I00-004", "Carrot", 100, 80),
];

export default function Item() {
    return(
        <>
            < Header/>
            <Box sx={{ width: "100%", mt: 3 }}>
                <h1>Item</h1>
                <Grid lg={5}  md={5} sm={10} xs={11} ml={5} >
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
                            action="item"
                            id="itemForm"
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
                                id="txtItemId"
                                name="code"
                                label="Item Code "
                                placeholder="I00-001"
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
                                id="txtItemName"
                                name="description"
                                label="Item Name :"
                                placeholder="carrot"
                                required
                                size="small"
                            />

                            <TextField
                                sx={{
                                    fontSize: 22,
                                    fontWeight: "bold",
                                    fontFamily: "Poppines",
                                }}
                                id="txtItemQty"
                                name="qty"
                                label="QTY on Hand"
                                placeholder="200"
                                required
                                size="small"
                            />

                            <TextField
                                sx={{
                                    fontSize: 22,
                                    fontWeight: "bold",
                                    fontFamily: "Poppines",
                                }}
                                id="txtItemPrice"
                                name="unitPrice"
                                label="Price Salary "
                                placeholder="100"
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

                <Grid container width={900} justifyContent={"center"} py={4} >
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700}}  aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell> Item Name </StyledTableCell>
                                    <StyledTableCell align="center">Item Code</StyledTableCell>
                                    <StyledTableCell align="center">Item Price&nbsp;(Rs)</StyledTableCell>
                                    <StyledTableCell align="center">Item QTY</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.code}</StyledTableCell>
                                        <StyledTableCell align="center">{row.qty}</StyledTableCell>
                                        <StyledTableCell align="center">{row.price}</StyledTableCell>

                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Box>
        </>
    )
};







