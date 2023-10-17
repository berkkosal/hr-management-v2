import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

function LoginPageContainer() {



    return (
        
        <Grid container>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" type="password" label="Password" variant="outlined" />
                </Grid>


                <Grid container justifyContent="center">
                    <Button variant='outlined' type='submit'>Login</Button>
                </Grid>


            </Grid>
        </Grid>
    )
}



export default LoginPageContainer