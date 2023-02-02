import React, { useEffect, useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, makeStyles } from '@material-ui/core'
import useFetch from '../../../hooks/useFetch';
import axios from 'axios';
import { Delete, Edit } from '@material-ui/icons';
import EditModal from './EditModal';

const useStyle = makeStyles((theme) => ({
    container: {
        width: '80%',
        margin: "0 auto",
        borderRadius: "10px",
        fontFamily: "Vazir-Medium",
        backgroundColor: "#555",
        padding: "20px",
        paddingTop: '0'
    },
    product: {
        width: "250px",
        height: "400px",
        backgroundColor: "#eee",
        borderRadius: "5px",
        margin: "10px"
    },
    imageContainer: {
        width: '230px',
        margin: "10px",
        border: "1px solid",
        height: "150px",
        margin: "10px auto"
    },
    productImage: {
        width: "230px",
        height: "150px",
    },
    productTitle: {
        marginTop: "15px",
        textAlign: "center"
    },
    buttons: {
        marginTop: "50px",

    },
    editButton: {
        color: "#454545",
        width: '100px',
        height: '50px',
        border: "2px solid #6fa8dc",
        marginRight: "15px"
    },
    deleteButton: {
        width: '100px',
        height: '50px',
        border: "2px solid #eb2d2d",
        color: "#454545",
        marginRight: "20px"
    },
    editModal: {
        display: 'none'
    },

}));



function AdminManageProducts() {
    const classes = useStyle();
    const [allProducts, setAllProducts] = useState([]);
    const [shownProducts, setShownProducts] = useState([]);
    const [showmodal, setShowModal] = useState(false);
    const [gtReq] = useFetch();
    const [deleteReq] = useFetch();



    useEffect(() => {
        gtReq({
            url: `/api/product/get`,
            method: "GET",
        }).then(res => {
            console.log('hiii')
            setShownProducts(allProducts)
            let arr = [];
            for (var i in res) {
                arr.push(res[i])
            }
            setAllProducts(allProducts.concat(arr));
        }).catch(exp => {
            console.log("could not fetch p")
        })
    }, [])




    const onDelete = (id) => {
        console.log(id)
        setAllProducts([...allProducts.filter(product => product._id !== id)])
        gtReq({
            url: `/api/product/delete/` + id,
            method: "DELETE",
            headers: {
                'token': localStorage.getItem("admin-token"),
            },
        }).then(res => {

        }).catch(exp => {
            console.log("could not fetch p")
        })
    }

    const handleModalClose = () => {
        setShowModal(false)
    }
    


    return (
        <Grid container className={classes.container}>
            { showmodal && <EditModal  handleModalClose={handleModalClose}/>}
            {
                allProducts.map((product, index) => (
                    <Grid key={index} className={classes.product} spacing='3' >
                        <div className={classes.imageContainer}>
                            <img src={product.productImages[0]} className={classes.productImage} />
                        </div>
                        <Typography className={classes.productTitle} variant='h6'>{product.productTitle}</Typography>
                        <Typography className={classes.productTitle} >{product.productInfo}</Typography>
                        <div className={classes.buttons}>
                            <Button className={classes.editButton} variant='outlined' onClick={() => { setShowModal(true)}}> <Edit /> </Button>
                            <Button className={classes.deleteButton} variant='outlined' onClick={() => { onDelete(product._id) }}> <Delete /> </Button>
                        </div>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default AdminManageProducts