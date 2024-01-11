import React from "react";
import Header from "../../common/Header/Header";
import {
    Autocomplete,
    Paper,
    styled,
    Table,
    TableBody, TableCell, tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


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

function createData(code: string,customerid:string, name: string, qty: number, price: number,) {
    return { code,customerid, name, qty, price, };
}

const rows = [
    createData("I00-001", "C00-001","Carrot",100,200),
    createData("I00-002", "C00-002","parsnip",50,50),
    createData("I00-003", "C00-003","sugar beet",100,120),
    createData("I00-001", "C00-004","Carrot",100,26),
    createData("I00-002", "C00-005","parsnip",100,30),
    createData("I00-004", "C00-006","radish",100,60),

];

export default function OrderDetails(){
    return(
        <>
            <Header/>
            <h1>Order Details</h1>
            <Grid container width={900} justifyContent={"center"} py={4} ml={20} >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700}}  aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell> Item Code </StyledTableCell>
                                <StyledTableCell align="center">Order ID</StyledTableCell>
                                <StyledTableCell align="center">Customer ID</StyledTableCell>
                                <StyledTableCell align="center">Item Name</StyledTableCell>
                                <StyledTableCell align="center">Item Price&nbsp;(Rs)</StyledTableCell>
                                <StyledTableCell align="center">Item QTY</StyledTableCell>
                                <StyledTableCell align="center">Option</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row">
                                        {row.code}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">O00-001</StyledTableCell>
                                    <StyledTableCell align="center">{row.customerid}</StyledTableCell>
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center">{row.qty}</StyledTableCell>
                                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button>Delete</button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

        </>
    )
}




