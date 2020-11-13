import React from 'react'
import Tryolximg from './TryOlxAppimg.webp'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import appstoreimg from './appstore_img.webp'
import playstoreimg from './playstoreimg.webp'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 3,
    },
}));


function TryOlxApp() {
    const classes = useStyles();

    return (
        <div className='Try__olximg_maindiv'>
            {/* <React.Fragment> */}
            <Container maxWidth="lg">
                <div className={classes.root}>

                    <Grid container spacing={0}>

                        <Grid item sm={12} md={4} lg={4} >
                            <img src={Tryolximg} alt="" width='100%'/>
                        </Grid>
                        <Grid item sm={12} md={4} lg={4}>
                            <div className='TryolxApp__Heading'>
                                <h1 >TRY THE OLX APP</h1>
                            </div>
                            <div className='TryolxApp__Para'>
                                <p>Buy, sell and find just about anything using the app on  your mobile.</p>
                            </div>
                        </Grid>
                        <Grid item sm={12} md={4} lg={4} >
                            <div className="Getyour__App__para">
                                <p>GET YOUR APP TODAY</p>
                            </div>
                            <div className='Appstore__img'>
                            <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665"><img src={appstoreimg} alt="" height='40px'/></a>
                            <a href="https://play.google.com/store/apps/details?id=com.olx.pk&hl=en_US&gl=US"><span><img src={playstoreimg} alt="" height='40px'/></span></a>
                            </div>
                    </Grid>

                    </Grid>

                </div>
            </Container>

            {/* </React.Fragment> */}
        </div>
    )
}

export default TryOlxApp



