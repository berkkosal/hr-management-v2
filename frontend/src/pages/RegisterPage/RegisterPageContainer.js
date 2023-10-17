import { Button, Grid, TextField } from '@mui/material'
import React from 'react'







function RegisterPageContainer() {


    


    return (
        <>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Surname" variant="outlined" />
                </Grid>
                <Grid item  xs={4}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </Grid>

                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="RePassword" type="password" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Phone" variant="outlined" />
                </Grid>

                <Grid item>
                    <Button variant='contained' type='submit'>Gönder</Button>
                </Grid>

            </Grid >
        </>
    )



}

export default RegisterPageContainer