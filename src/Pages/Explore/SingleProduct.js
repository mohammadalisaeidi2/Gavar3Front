import React, { useEffect, useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, makeStyles } from '@material-ui/core'
import { StarBorder } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';


const useStyle = makeStyles((theme) => ({
    cardContainer: {
        width: '290px',
        height: '450px',
        margin: '20px 8px',
        marginBottom: '20px',
        borderRadius: "10px",
        fontFamily: "Vazir-Medium",
        backgroundColor: "#fff",
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        display: 'inline-block',
        cursor: "pointer",
        overflow:'hidden',
        
    },
    product: {
        width: "290px",
        height: "450px",
        backgroundColor: "#fff",
        borderRadius: "5px",
    },
    imageContainer: {
        width: '280px',
        height: "200px",
        margin: "5px auto",
    },
    productImage: {
        width: "280px",
        height: "200px",
        borderRadius: "5px"

    },
    productTitle: {
        fontSize: '20px',
        marginTop: "20px",
        textAlign: "right",
        marginRight: "15px",
        color:"#353535",
        textDecoration:'underline red',
        textUnderlineOffset: '10px',
    },

    productInfo: {
        fontSize: '16px',
        textAlign: 'right',
        marginRight: '15px',
        marginTop: '15px',
        maxWidth:'280px'
    },
    downPart: {
        width: '90%',
        height:'120px',
        margin: '0px auto',

    },
    productPrice: {
        marginRight: '70px',
        marginTop:'50px',
        display: 'inline-block',

    },
    score: {
        display: 'inline-block',
        marginRight:"20px"
    }


}));



function SingleProduct({ data }) {
    const classes = useStyle();
    const [showmodal, setShowModal] = useState(false);
    const goldPrice = 1000000;
    const productPrice = ((goldPrice) + (goldPrice * data.productWages / 100)) * data.productAvailability[0].weight
    const navigate = useNavigate();

    const onClickProduct = () => {
        navigate('/product/' + data._id)

    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }



    return (
        <div className={classes.cardContainer} onClick={onClickProduct}>
            <div className={classes.product} >
                <div className={classes.imageContainer}>
                    <img src={'http://localhost:4000/static/' + data.productImages[0]} className={classes.productImage} />
                </div>
                <h5 className={classes.productTitle}>{data.productTitle}</h5>
                <p className={classes.productInfo} >{data.productDetile}</p>
                <div className={classes.downPart}>
                    <div className={classes.score}>
                        <StarBorder style={{ color: '#f9bc02', fontSize:'25px',marginRight:'5px' }} />
                        <p>امتیاز {data.productScore}</p>
                        <p>{ }</p>
                    </div>
                    <div className={classes.productPrice}>
                        <h4 style={{ fontSize: '22px' }}>{numberWithCommas(productPrice)}</h4>
                        <p style={{}}>تومان</p>
                    </div>
                </div>
            </div>
        </div>
    )
}






export default SingleProduct