import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import  './Footer.css';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/userReducer';

function Footer() {
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    var footerComponent

    if (token !== "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className='box1'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-me nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.facebook.com/cipriana.luis" target="_blank">
                        <FacebookIcon className='redes' />
                    </a>
                    <a href="https://www.instagram.com/p/CdqOZNNutdcmLze3wotAg_dbvjgfb4JIfeBgQk0/?igshid=YmMyMTA2M2Y=" target="_blank">
                        <InstagramIcon className='redes'/>
                    </a>
                    <a href="https://www.linkedin.com/in/cipriana-lu%C3%ADs-a097bb152" target="_blank">
                        <LinkedInIcon className='redes' />
                    </a>
                </Box>
            </Box>
            <Box className='box2'>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2022 Copyright:</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://brasil.generation.org">
                        <Typography variant="subtitle2" gutterBottom className='textos' align="center">brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }
    return (
        <>
            { footerComponent }
        </>
    )
}

export default Footer;