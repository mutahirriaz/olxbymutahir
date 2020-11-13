import React from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FreshRecommand from './Fresh.json'
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import Mapimg from './productmapimg.png'


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

function FreshRecomandationProduct() {
    const classes = useStyles();

    const { id } = useParams()
    const Freshrecomandationproduct = FreshRecommand[id]

    return (
        <div>
            <Container maxWidth="lg">
                {/* <div className='Fresh_Recommand_Product_Poster'>
                    <img src={sellsextime} alt="" width='50%' />
                </div> */}
                <div className={classes.root} id='Product__main_div'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6} lg={8} >
                            <div key={FreshRecomandationProduct.id} className='Fresh_Recommand_Product_Img'>
                                <img src={Freshrecomandationproduct.imageURL}  alt="" />
                            </div>
                        </Grid>
                        <Grid item sx={12} sm={12} md={6} lg={4}>
                            <div key={FreshRecomandationProduct.id} className='Image_intro'>
                                <div className='Image_price'>
                                    <div className='product__icon'> <span><FavoriteIcon  className='heart' /></span> 
                                   <span><ShareIcon /></span> </div>
                                    <h2>RS {Freshrecomandationproduct.price}</h2>
                                </div>
                                <div className='Image_name'>
                                    <p>{Freshrecomandationproduct.name}</p>
                                </div>
                                <div className='Image_address'>
                                    <p>{Freshrecomandationproduct.residence}</p>
                                </div>
                            </div>
                            <div key={Freshrecomandationproduct.id} className='seller_description'>
                                <div className='seller_description_heading'>
                                    <h3>Seller description</h3>
                                </div>
                                <div className='avatar'>
                                    <AccountCircleIcon className='Avatar__icon' />
                                    <p>Seller</p>
                                </div>
                                <p className='Member_of_olx'>Member of OLX</p>
                                <div className='Seller_description_button'>
                                    <button>Chat with seller</button>
                                </div>
                                <div className='Product__MobileNo'>
                                    <PhoneIcon className='Phone__icon'/>
                                    <p className='stars'> ** **** *** </p>
                                    <p className='Show_number_para'> show number </p>
                                </div>
                            </div>  
                            <div className='Product__Posted_In'>
                                    <div className='Posted_In_para'>
                                    <h3>Posted in</h3>
                                    <h4>{Freshrecomandationproduct.residence}</h4>
                                    </div>
                                    <img src={Mapimg} alt=""/>
                                </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default FreshRecomandationProduct
