import { Grid, Paper } from '@material-ui/core';
import { Grid3x3 } from '@mui/icons-material';
import React from 'react';
import './Home.css';
  
function Home(){
    <>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
            <Paper style={{height: "100vh", background: "lightgrey" }}/>
        </Grid>
        <Grid item container direction="column" xs={12} sm={4} spacing={2}>
            <Grid item>
                <Paper style={{ height: "49", background: "blue" }}/>
            </Grid>
            <Grid item>
                <Paper style={{height: "49vh", background: "green" }}/>
            </Grid> 
        </Grid>
    </Grid>
    </>
}