import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import './Product.css'
import useFetch from '../../hooks/useFetch'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { Shop, ShopOutlined } from '@material-ui/icons'

function Product() {
    const id = useParams().id
    console.log('id from param:' + id)
    const [data, setData] = useState({});
    const [getReq] = useFetch();
    const [stone, setStone] = useState('خیر');
    const [size, setSize] = useState();
    const goldPrice = 1000000;


    useEffect(() => {
        getReq({
            url: `/api/product/find/` + id,
            method: "GET",
        }).then(res => {
            console.log('get response')

            setData(res)

        }).catch(exp => {
            console.log("could not fetch p")
        })
    }, [])

    const checktStone = () => {
        if (data.productHasStone) {
            setStone('بله')
        }
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const onAddtoCart = () => {
        console.log((((goldPrice) + (goldPrice * data.productWages / 100)) * size.weight))
        var old_cart = []
        var new_cart = []
        var new_cart = []
        if (localStorage.getItem('cart') === null) {
            new_cart = [{ 'id': id, 'sizeid': size }]
            localStorage.setItem('cart', JSON.stringify(new_cart))
            window.location.reload();

        } else {
            old_cart = JSON.parse(localStorage.getItem('cart'))
            old_cart.push({ 'id': id, 'sizeid': size })
            localStorage.setItem('cart', JSON.stringify(old_cart))
            window.location.reload();
        }
    }


    return (
        <div className='productpage-container'>
            <div className='images'>
                <div className='main-pic'>
                    {data?.productImages && <img src={'http://localhost:4000/static/' + data.productImages[0]}  ></img>}
                </div>

                {data?.productImages && data.productImages.map((image) => (
                    <div className='other-pics'>
                        <img src={'http://localhost:4000/static/' + image} ></img>
                    </div>
                ))}

            </div>

            <div className='infos'>
                <div className='title'>
                    <h2>{data?.productTitle && data.productTitle}</h2>
                </div>
                <div className='info'>
                    <h4>{data?.productDetile && data.productDetile}</h4>
                    <h3>ویزگی ها</h3>
                    <p>رنگ: {data?.productColor && data.productColor}</p>
                    <p>اجرت ساخت: {data?.productWages && data.productWages}درصد</p>
                    <p>شرکت سازنده: {data?.productBrand && data.productBrand}</p>
                    <p>سنگ خور : {stone}</p>
                    <p>مناسب برای استفاده {data?.productSex && data.productSex}</p>
                    <ul style={{ fontWeight: 'bold' }}>دسته بندی ها:
                        {data?.productCategories && data.productCategories.map((cat) => (
                            <li>{cat}</li>
                        ))}
                    </ul>
                    <h5>توضیحات بیشتر:</h5>
                    <p>{data.productInfo}</p>
                </div>
                <div className='sizes'>
                    <FormControl className='sizes-form' variant='outlined' fullWidth>
                        <InputLabel id='size'>انتخاب سایز  </InputLabel>
                        <Select
                            labelId='size'
                            value={size}
                            onChange={e => { setSize(e.target.value) }}
                        >
                            <MenuItem value=''> </MenuItem>
                            {
                                data?.productAvailability && data.productAvailability.map((item) => (
                                    <MenuItem value={item}>سایز {item.size}  -  وزن {item.weight}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>

                    <div className='price'>
                        <div className='shop-info'>
                            <li>هفت روز برگشت بدون شرط</li>
                            <li>ارسال برای تهران ۲ ساعت  </li>
                            <li>ارسال برای  شهرستان ها  ۲ روز</li>
                            <li> ارسال رایگان </li>
                        </div>
                        <h3>{data?.productWages && size?.weight && numberWithCommas((((goldPrice) + (goldPrice * data.productWages / 100)) * size.weight))} تومان</h3>
                        <Button
                            type='submit'
                            color='primary'
                            variant="contained"
                            onClick={onAddtoCart}>افزودن به سبدخرید<Shop style={{ marginRight: "10px" }} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product