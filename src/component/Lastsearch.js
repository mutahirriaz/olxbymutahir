import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import history from './Lastsearch.json'
// import {Link} from 'react-router-dom';

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


function Lastsearch() {
    const classes = useStyles();


    return (
        <div className='Lastsearch__div'>
            <div className='Lastsearch__Heading'>
                <h2>Based on your last search</h2>
            </div>
            <div className='history__maindiv'>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {Object.keys(history).map((keyNames) => {
                            const Search = history[keyNames]
                            return (

                                <Grid item sm={6} md={3} lg={3} key={keyNames} className='history'>
                                    {/* <Link to={`/product/${keyNames}`}> */}
                                    <Paper>
                                        <div >
                                            <img src={Search.imageURL} alt={Search.brand} width='50%' />
                                            <div className='history__paddingdiv'>
                                                <h3 className='history__price'>RS {Search.price}</h3>
                                                <p>{Search.name}</p>
                                                <p style={{paddingTop:'25px',textAlign:'right',paddingRight:'16px'}}>{Search.date}</p>
                                            </div>

                                        </div> 
                                    </Paper>
                                    {/* </Link> */}
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            </div>

        </div>
    )
}

export default Lastsearch
