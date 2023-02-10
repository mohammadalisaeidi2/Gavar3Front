import { Button, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Explore.css'
import useFetch from '../../hooks/useFetch'
import SingleProduct from './SingleProduct'
import { Sort } from '@material-ui/icons'

function Explore() {

    const [allProducts, setAllProducts] = useState([]);
    const [shownProducts, setShownProducts] = useState([]);
    const [getReq] = useFetch();

    const goldPrice = 1000000;
    const calculatePrice = (data) => {
        return ((goldPrice) + (goldPrice * data.productWages / 100)) * data.productAvailability[0].weight
    }

    useEffect(() => {
        getReq({
            url: `/api/product/get`,
            method: "GET",
        }).then(res => {
            let arr = [];
            for (var i in res) {
                arr.push(res[i])
            }
            setAllProducts(allProducts.concat(arr));
            setShownProducts(shownProducts.concat(arr));

        }).catch(exp => {
            console.log("could not fetch p")
        })
    }, [])



    const handleSort = (i) => {
        switch (i) {
            case 1:
            case 2: setShownProducts(allProducts.sort((a, b) => (calculatePrice(a) > calculatePrice(b)) ? 1 : -1))
            case 3:
            case 4: setShownProducts(allProducts.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1))
            case 5: setShownProducts(allProducts.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1))
        }
    }


    const onFilter = (e) => {
        e.preventDefault()
        var filters = []
        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            filters.push(checkboxes[i].value)
        }
        console.log('checkboxes', checkboxes)

        filters.map((filter) => {
            allProducts.map((product) => {
                if (product.productCategories.includes(filter)) {
                    setShownProducts([])
                    setShownProducts(shownProducts => [...shownProducts, product])
                }
            })
        })
    }



    return (
        <div container className='container'>
            <div className='products-container'>
                {
                    shownProducts.map((product) => (
                        <SingleProduct data={product} />
                    ))
                }
            </div>
            <div className='explore-sidebar-container'>
                <div className='sort-part'>
                    <p style={{ float: 'left' }}>مرتب سازی:</p>
                    <Sort style={{ float: 'left' }} />
                    <ul style={{ listStyleType: 'none' }}>
                        <li onClick={() => handleSort(1)}>محبوب ترین</li>
                        <li onClick={() => handleSort(2)}>ارزان ترین</li>
                        <li onClick={() => handleSort(3)}>گران ترین</li>
                        <li onClick={() => handleSort(4)}>جدید ترین</li>
                        <li onClick={() => handleSort(5)}>قدیمی ترین</li>
                    </ul>
                </div>
                <div className='filter-part'>
                    <p> فیلترها:</p>
                    <input id='1' type='checkbox' value='دستبند'></input>
                    <label for='1'>دستبند</label><br />
                    <input id='2' type='checkbox' value='گردنی'></input>
                    <label for='2'>گردنی</label><br />
                    <input id='3' type='checkbox' value='سرویس'></input>
                    <label for='3'>سرویس</label><br />
                    <input id='4' type='checkbox' value='پابند'></input>
                    <label for='4'>پابند</label><br />
                    <input id='5' type='checkbox' value='نیمست'></input>
                    <label for='5'>نیمست</label><br />
                    <input id='6' type='checkbox' value='گوشواره'></input>
                    <label for='6'>گوشواره</label><br />
                    <Button variant='contained' color='primary' onClick={(e) => onFilter(e)}>فیلتر کن</Button>

                </div>
            </div>
        </div>
    )
}






export default Explore