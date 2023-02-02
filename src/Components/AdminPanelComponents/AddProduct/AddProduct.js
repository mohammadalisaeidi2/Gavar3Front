import { Avatar, Button, Card, CardActionArea, CardMedia, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'
import { AddAPhotoOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import './AddProduct.css'




const useStyle = makeStyles((theme) => ({

  paperStyle: {
    padding: '30px',
    width: '70vw',
    margin: "0px auto",
    borderRadius: "10px",
    fontFamily: "Vazir-Medium",
    
    flexGrow: '1',

  },
  categories: {
    display: 'inline-block'
  },
  avatarStyle: {
    backgroundColor: '#1bbd7e',
    marginBottom: "30px"
  },
  btnstyle: {
    margin: '8px 0'
  },
  inputs: {
    margin: "10px auto",
    flexGrow: 1
  },
  input: {
    fontFamily: "Vazir-Medium",
    marginBottom: "5px"
  },
  options: {
    marginTop: "40px",
  },
  showCat: {
    display: "inline-block",
    marginLeft: "15px",
    backgroundColor: "#ddd",
    padding: "5px",
    borderRadius: "3px"
  },
  availability: {
    border: "2px solid #ddd",
    borderRadius: "5px",
    marginBottom: "10px",
    minHeight: "150px"
  },
  size: {
    width: "25%",
    display: "inline-block",
    marginRight: "5%",
    marginLeft: "5%",
  },
  weight: {
    width: "25%",
    display: "inline-block"
  },
  showAvailablity: {
    marginBottom: "15px",
    backgroundColor: "#ddd",
    padding: "5px",
    borderRadius: "3px",
    minWidth: "50px",
    marginLeft: "10px"
  },
  showAvailablityBody: {
    backgroundColor: "#f5f5dc",
    padding: '5px',
    display: 'inline-block',
    margin: "10px",
    borderRadius: "2px"
  },
  addAvailablityBtn: {
    marginRight: "10%",
    width: "15%",
    height: "50px",
    marginTop: "6px"
  },
  addImageBody: {
    border: "2px solid #ddd",
    borderRadius: "5px",
    marginBottom: "10px",
    minHeight: "150px"
  },
  addImageBtn: {
    marginRight: "42%",
    Width: "20%",
    height: "50px",
  },
  showImagesBody: {

  },
  showImage: {
    height: "150px",
    width: "250px",
    marginLeft: "20px",
    marginTop: "20px",
    border: "2px solid #454545",
    borderRadius: "5px"
  },
  inputImage: {
    
  },

}));


function AddProduct() {
  const [addReq] = useFetch();
  const [token] = localStorage.getItem('auth-token')
  const [productTitle, setProductTitle] = useState("");
  const [productDetile, setProductDetile] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productCategories, setProductCategories] = useState([]);
  const [productImages, setProductImages] = useState(["data:image/jpeg;base64,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", "data:image/jpeg;base64,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"]);
  const [productAvailability, setProductAvailability] = useState([]);
  const [productBrand, setProductBrand] = useState("");
  const [productWages, setProductWages] = useState("");
  const [productSex, setProductSex] = useState("");
  const [productHasStone, setProductHasStone] = useState("");
  const [tmpAvailablity, setTmpAvailablity] = useState({ "size": "", "wegiht": "" })
  var productScore = 5
  

  const classes = useStyle();

  const onAddAvailablity = (event) => {
    setProductAvailability(productAvailability => [...productAvailability, tmpAvailablity]);
    setTmpAvailablity("")
  }

  const onSubmit = (event) => {
    console.log("onSubmit function")
    event.preventDefault();
    addReq({
      url: `/api/product/add`,
      method: "POST",
      data: {
        productTitle,
        productDetile,
        productInfo,
        productColor,
        productCategories,
        productImages,
        productAvailability,
        productBrand,
        productWages,
        productSex,
        productHasStone,
        productScore
      },
      headers:{
        'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2JhODZlYjlhMGMyN2EwYzQ2MjY4ZDYiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NzUxNTg4NTgsImV4cCI6MTY3NTE2MDA1OH0.3Wbe8GRwq7XTW-HBRqGtbaBRrTKrakLJmi4IaTarzSw',

      },
    }).then(res => {

      console.log("ADDED !!")
      console.log(res);
      //navigate("/");


      window.location.reload();
    }).catch(exp => {
      console.log(JSON.stringify(exp));
      // Todo: use toast

      alert("Something went wrong!")
    })
  }
  return (
    <Paper elevation={5} className={classes.paperStyle} >
      <Typography variant='h4' style={{ marginBottom: "30px" }}>افزودن محصول</Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            direction='rtl'
            variant='outlined'
            label='عنوان'
            placeholder=' '
            fullWidth required className={classes.input}
            onInput={e => { setProductTitle(e.target.value) }}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            variant='outlined'
            label='توضیخ مختصر'
            placeholder='زیر عنوان نمایش داده میشود'
            fullWidth required className={classes.input}
            onInput={e => { setProductDetile(e.target.value) }}
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl className={classes.colorInput} variant='outlined' fullWidth>
            <InputLabel id='color'>رنگ  </InputLabel>
            <Select
              labelId='color'
              value={productColor}
              onChange={e => { setProductColor(e.target.value) }}
            >
              <MenuItem value=''> </MenuItem>
              <MenuItem value='rose'> رزگلد</MenuItem>
              <MenuItem value='silver'>سفید</MenuItem>
              <MenuItem value='golden'> طلایی</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <TextField
            variant='outlined'
            label='اجرت ساخت'
            placeholder='درصد'
            fullWidth required className={classes.input}
            onInput={e => { setProductWages(e.target.value) }}
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl className={classes.colorInput} variant='outlined' fullWidth>
            <InputLabel id='categories'>دسته بندی  </InputLabel>
            <Select
              labelId='categories'
              value={productColor}
              onChange={e => { setProductCategories(productCategories => [...productCategories, e.target.value]) }}
            >
              <MenuItem value=''> </MenuItem>
              <MenuItem value='دستبند'> دستبند</MenuItem>
              <MenuItem value='انگشتر'>انگشتر</MenuItem>
              <MenuItem value='گردنبند'>گردنبند</MenuItem>
              <MenuItem value='مدال'> مدال</MenuItem>
              <MenuItem value='سرویس'> سرویس</MenuItem>
              <MenuItem value=' نیمست'> نیمست</MenuItem>
              <MenuItem value='پابند'> پابند</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8} >
          <ul>
            {productCategories.map((cat) => (
              <li className={classes.showCat}>{cat}</li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={3}>
          <FormControl className={classes.colorInput} variant='outlined' fullWidth>
            <InputLabel id='color'>جنسیت  </InputLabel>
            <Select
              labelId='color'
              value={productColor}
              onChange={e => { setProductSex(e.target.value) }}
            >
              <MenuItem value=''> </MenuItem>
              <MenuItem value='rose'> مردانه</MenuItem>
              <MenuItem value='silver'>زنانه</MenuItem>
              <MenuItem value='golden'> مردانه و زنانه</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl className={classes.colorInput} variant='outlined' fullWidth>
            <InputLabel id='color'>سنگ خور  </InputLabel>
            <Select
              labelId='color'
              value={productColor}
              onChange={e => { setProductHasStone(e.target.value) }}
            >
              <MenuItem value=''> </MenuItem>
              <MenuItem value='true'> بله</MenuItem>
              <MenuItem value='false'>خیر</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            variant='outlined'
            label='برند'
            placeholder='انگلیسی'
            fullWidth required className={classes.input}
            onInput={e => { setProductBrand(e.target.value) }}
          />

        </Grid>
        <Grid item xs={12} >
          <Typography variant='h6'>افزودن موجودی </Typography>
        </Grid>
        <Grid item xs={12} className={classes.availability}>
          <TextField
            variant='outlined'
            label='سایز'
            placeholder=''
            fullWidth required className={classes.size}
            onInput={e => { setTmpAvailablity(tmpAvailablity => ({ ...tmpAvailablity, size: e.target.value })) }}
          />
          <TextField
            variant='outlined'
            label='وزن'
            placeholder='گرم'
            fullWidth required className={classes.weight}
            onInput={e => { setTmpAvailablity(tmpAvailablity => ({ ...tmpAvailablity, weight: e.target.value })) }}
          />
          <Button
            type='submit'
            color='primary'
            variant="contained"
            className={classes.addAvailablityBtn}
            onClick={onAddAvailablity}>افزودن موجودی
          </Button>
          <br />
          {productAvailability.map((avl) => (
            <>
              <div className={classes.showAvailablityBody} >
                <p className={classes.showAvailablity}>{avl.size}  گرم </p>
                <p className={classes.showAvailablity}>{avl.weight}  سایز</p>
              </div>
            </>
          ))}
        </Grid>




        <Grid item xs={12} >
          <Typography variant='h6'>افزودن تصویر </Typography>
        </Grid>
        <Grid item xs={12} className={classes.addImageBody}>
          <input
            accept="image/*"
            className={classes.inputImage}
            id="contained-button-file"
            multiple
            type="file"
            onChange={e => { setProductImages(productImages => [...productImages, e.target.value]) }}
          />
          <Button
            type='submit'
            color='primary'
            variant="contained"
            className={classes.addImageBtn}
            onClick={e => { setProductImages(productImages => [...productImages, e.target.value]) }}>افزودن تصویر
            <AddAPhotoOutlined style={{ marginRight: "10px" }} />
          </Button>
          
          <br />
          <div className={classes.showImagesBody}>
            {productImages.map((img) => (
              <>
                <img
                  src={img}
                  className={classes.showImage}
                />
              </>
            ))}
          </div>

        </Grid>

        <Button
          type='submit'
          color='primary'
          variant="contained"
          className={classes.btnstyle}
          fullWidth
          onClick={onSubmit}>افزودن محصول
        </Button>
      </Grid>
    </Paper>
  )
}

export default AddProduct