import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FreshRecommand from './Fresh.json'
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 3,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));



function Freshrecomand() {
    const classes = useStyles();
    return (
        <div className='Fresh__recomand__maindiv'>
            <div className='Fresh__recommendations'>
                <h2>Fresh recommendations</h2>
            </div>
            
            <div className='history__maindiv'>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {Object.keys(FreshRecommand).map((keyNames) => {
                            const Fresh = FreshRecommand[keyNames]
                            return (
                                <Grid item sm={6} md={3} lg={3} key={keyNames} className='history' >
                                    <Link to={`/product/${keyNames}`}>
                                    <Paper >
                                        <div id='Fresh__Recommand_border'>
                                            <img src={Fresh.imageURL}  alt={Fresh.brand} width='50%' height='200px' /> 
                                            <div className='history__paddingdiv'>
                                                <h3 className='history__price'>RS {Fresh.price}</h3>
                                                <p>{Fresh.name}</p>
                                                <p style={{paddingTop:'25px',textAlign:'right',paddingRight:'16px'}}>{Fresh.date}</p>
                                            </div>

                                        </div>
                                    </Paper>
                                    </Link>
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            </div>


        </div>
    )
}

export default Freshrecomand;
