import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 3,
    },
}));

function Copywrite() {
    const classes = useStyles();

    return (
        <div className='Copy__writediv'>
            <Container maxWidth="lg">
                <div className={classes.root} >
                <Grid container spacing={0}>
                <Grid item sm={12} md={6} lg={6}>
                    <div className="Other_countries">
                        <span className='otherCountries_span'>Other Countries</span>
                        <span className='Pakistan_span'>Pakistan - South Africa - Indonesia</span>
                    </div>
                </Grid>
                <Grid item sm={12} md={6} lg={6}>
                   <div className='Free__clasified'>
                   <span className='FreeClasified_span'> Free Classifieds in Pakistan</span>
                    <span className='Olx_Copywrite_span'>. © 2006-2020 OLX</span>
                   </div>
                </Grid>
                </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Copywrite
