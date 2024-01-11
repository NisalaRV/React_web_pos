import React from "react";
import Header from "../../common/Header/Header";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Home() {
    return (
        <>
         <Header/>
            <h1> Home</h1>

            <Container sx={{ py:4 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container margin={3} rowSpacing={2} columnSpacing={3} gap={5} >
                        <Grid xs={12} sm={6} md={3}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Customer
                                    </Typography>
                                    <Typography>
                                       Count :
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid>

                    <Grid xs={12} sm={6} md={3} >
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                Item
                                </Typography>
                                <Typography>
                                   Count :
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid xs={12} sm={6} md={3} >
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                 Order
                                </Typography>
                                <Typography>
                                    Count :
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={3} >
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Pending
                                </Typography>
                                <Typography>
                                    Count :
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={3} >
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Stock
                                </Typography>
                                <Typography>
                                    Details :
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>

            </Container>

        </>
    );
}


