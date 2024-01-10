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
import Button from "@mui/material/Button";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const options = ['C00-001', 'C00-002','C00-003'];

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
    return { code, name, qty, price,options };
}

const rows = [
    createData("I00-001", "Carrot",100,20),

];

export default function Order(){
    const [value, setValue] = React.useState<string | null>(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    return(
        <>
            <Header/>
            <h1>Place Order</h1>

            <Grid ml={5} >
                <br/>
                <Autocomplete
                    value={value}
                    onChange={(event: any, newValue: string | null) => {
                        setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={options}
                    sx={{width: 300}}
                    renderInput={(params) => <TextField {...params} label="Customer ID"/>}
                />

            </Grid>
                <Grid py={3}  ml={10} >
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                        <TextField label="Name"
                        />

                        <TextField label="Address"
                        />

                        <TextField label="Salary"
                        />

                        <TextField label="Item Name"
                        />

                        <TextField label="Qty On hand"
                        />

                        <TextField label="Price"
                        />

                    </Box>

                </Grid>
            <Grid ml={156}>
                <Button variant="contained" color="primary">
                    Add To Cart
                </Button>

            </Grid>

            <Grid container width={900} justifyContent={"center"} py={4} ml={20} >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700}}  aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell> Item Code </StyledTableCell>
                                <StyledTableCell align="center">Order ID</StyledTableCell>
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
                                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                                    <StyledTableCell align="center">{row.qty}</StyledTableCell>
                                    <StyledTableCell align="center">{row.price}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button >Edit</button>
                                        <button>Delete</button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid ml={10}>

                <TextField label="Total"
                />
            </Grid>

            <Grid ml={156}>
                <Button variant="contained" color="success">
                    Place Order
                </Button>

            </Grid>
            <Grid ml={156} py={5}>
                <Button variant="contained" color="error">
                   Cancle
                </Button>

            </Grid>




        </>
    )
}




