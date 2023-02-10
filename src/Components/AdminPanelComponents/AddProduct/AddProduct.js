import { Avatar, Button, Card, CardActionArea, CardMedia, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, TextareaAutosize, TextField, Typography } from '@material-ui/core'
import { AddAPhotoOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import './AddProduct.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




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
  btnstyle: {
    width: '60%',
    height: '60px',
    margin: '10px auto'
  }

}));


function AddProduct() {
  const [addReq] = useFetch();
  //const [token] = localStorage.getItem('auth-token')
  const [productTitle, setProductTitle] = useState("");
  const [productDetile, setProductDetile] = useState("");
  const [productInfo, setProductInfo] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productCategories, setProductCategories] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [productAvailability, setProductAvailability] = useState([]);
  const [productBrand, setProductBrand] = useState("");
  const [productWages, setProductWages] = useState("");
  const [productSex, setProductSex] = useState("");
  const [productHasStone, setProductHasStone] = useState("");
  const [tmpAvailablity, setTmpAvailablity] = useState({ "size": "", "wegiht": "" })
  var productScore = 5
  const [lastId, setLastId] = useState(0);



  const [image, setImage] = useState({ prewiew: '', data: '' });
  const [upReq] = useFetch();

  const handleSubmitUpload = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    addReq({
      url: `/api/product/upload`,
      method: "POST",
      data: formData,
      headers: {
        'token': localStorage.getItem('admin-token'),
        'lastId': lastId,
      },
    }).then(res => {
      toast.success('تصویر با موفقیت اضافه شد', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }).catch(exp => {
    })
  }


  const handleFileChangeUpload = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }


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
      headers: {
        'token': localStorage.getItem('admin-token')

      },
    }).then(res => {
      setLastId(res);
      console.log("ADDED !!")
      console.log(res);
      console.log(lastId)
      toast.success('محصول با موفقیت اضافه شد', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }).catch(exp => {
      console.log(JSON.stringify(exp));
      toast.error('ثبت محصول با خطا مواجه شد', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
  }
  return (
    <Paper elevation={5} className={classes.paperStyle} >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
            <InputLabel id='sex'>جنسیت  </InputLabel>
            <Select
              labelId='sex'
              value={productColor}
              onChange={e => { setProductSex(e.target.value) }}
            >
              <MenuItem value=''> </MenuItem>
              <MenuItem value='مردانه'> مردانه</MenuItem>
              <MenuItem value='زنانه'>زنانه</MenuItem>
              <MenuItem value='مردانه و زنانه'> مردانه و زنانه</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl className={classes.colorInput} variant='outlined' fullWidth>
            <InputLabel id='Stone'>سنگ خور  </InputLabel>
            <Select
              labelId='Stone'
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
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            label='توضحات'
            placeholder=''
            fullWidth required className={classes.input}
            onInput={e => { setProductInfo(e.target.value) }}
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


        <Button
          type='submit'
          color='primary'
          variant="contained"
          className={classes.btnstyle}
          fullWidth
          onClick={onSubmit}>افزودن محصول
        </Button>

        <Grid item xs={12} >
          <Typography variant='h6' style={{ marginTop: '50px' }}>افزودن تصویر </Typography>
        </Grid>
        <Grid item xs={12} className={classes.addImageBody}>

          <br />
          <form onSubmit={handleSubmitUpload}>
            <input type='file' name='file' onChange={handleFileChangeUpload}></input>
            <Button
              type='submit'
              color='primary'
              variant="contained"
              className={classes.addImageBtn}
            >افزودن تصویر
              <AddAPhotoOutlined style={{ marginRight: "10px" }} />
            </Button>

          </form>

          <br />
          <div className={classes.showImagesBody}>

          </div>

        </Grid>


      </Grid>
    </Paper>
  )
}


export default AddProduct