import React from "react";
import Header from "../../common/Header/Header";
import {Autocomplete, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const options = ['C00-001', 'C00-002','C00-003'];
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

                        <TextField
                            label="Total"
                        />
                        <TextField
                            label="Quantity"
                        />

                    </Box>

                </Grid>

        </>
    )
}




