import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import appstoreimg from './appstore_img.webp'
import playstoreimg from './playstoreimg.webp'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 3,
    },
}));

function FooterCatogeries() {
    const classes = useStyles();

    return (
        <div className='Footercatogeries__maindiv'>
            <Container maxWidth="lg">
                <div className={classes.root} id='Footer__center'>

                    <Grid container spacing={0}>
                        <Grid item sm={6} md={4} lg={2}>
                            <div className='PopularCatogeries'>
                                <p>POPULAR CATEGORIES</p>
                            </div>
                            <div className='PopularCatogeries__links'>
                                <p>Cars</p>
                                <p>Flats for rent</p>
                                <p>Jobs</p>
                                <p>Mobile Phones</p>
                            </div>
                        </Grid>
                        <Grid item sm={6} md={4} lg={2}>
                            <div className="TrendingSearch">
                                <p>TRENDING SEARCHES</p>
                            </div>
                            <div className="TrendingSearch__links">
                                <p>Bikes</p>
                                <p>Watches</p>
                                <p>Books</p>
                                <p>Dogs</p>
                            </div>
                        </Grid>
                        <Grid item sm={6} md={4} lg={2}>
                            <div className="AboutUs">
                                <p>ABOUT US</p>
                            </div>
                            <div className="AboutUs__links">
                                <p>About OLX Group</p>
                                <p>OLX Blog</p>
                                <p>Contact Us</p>
                                <p>OLX for Businesses</p>
                            </div>
                        </Grid>
                        <Grid item sm={6} md={4} lg={3}>
                            <div className="Olx">
                                <p>OLX</p>
                            </div>
                            <div className="Olx__links">
                                <p>Help</p>
                                <p>Sitemap</p>
                                <p>Legal & Privacy information</p>
                            </div>
                        </Grid>
                        <Grid item sm={6} md={4} lg={3}>
                            <div className="Follow_us">
                                <p>FOLLOW US</p>
                            </div>
                            <div className='Follow_us_icons'>
                                <span><FacebookIcon className='footericon'/></span>
                                <span><TwitterIcon className='footericon' /></span>
                                <span><YouTubeIcon className='footericon' /></span>
                                <span><InstagramIcon className='footericon' /></span>
                            </div>
                            <div className="footer__images">
                                <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665"><img src={appstoreimg} alt="appStoreImg" /></a>
                                <a href="https://play.google.com/store/apps/details?id=com.olx.pk&hl=en_US&gl=US"><span><img src={playstoreimg} alt="PlayStoreImg"/></span></a>
                            </div>
                        </Grid>
                    </Grid>

                </div>
            </Container>
        </div>
    )
}

export default FooterCatogeries
