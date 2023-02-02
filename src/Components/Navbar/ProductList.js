import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyle = makeStyles((theme) => ({
    container: {
        backgroundColor: "#eee",
        width:'100px',
        height:'300px',
        zIndex:'999'

    },

}));

function ProductList() {
    const classes = useStyle();

  return (
    <div className={classes.container}>
        
    </div>
  )
}

export default ProductList