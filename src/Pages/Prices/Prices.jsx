import React, { useEffect, useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, makeStyles, Table } from '@material-ui/core'
import useFetch from '../../hooks/useFetch';
import axios from 'axios';


const useStyle = makeStyles((theme) => ({
    pricesContainer: {
        width: '100vw',
        minHeight: '100vh',
        display: 'inline-block',
        //backgroundImage: 'linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%)',
        backgroundImage: 'linear-gradient(to right, #ec77ab 0%, #7873f5 100%)'

    },
    pricesTableContainer: {
        width: '70vw',
        margin: '20vh auto',
        marginBottom: '15vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'


    },
    date: {
        textAlign:'center',
        position:'fixed',
        top:'0',
        right:'0',
        marginTop:'100px',
        marginRight:'120px',
        color: '#222',
        backgroundColor: 'rgb(193, 192, 143)',
        borderRadius: '5px',
        padding: '10px',
        width: '120px'

    },
    goldPart: {
        width: '30%',
        display: 'inline-block',
        margin: '10px',
        backgroundColor: '#ccc',
        textAlign: 'center',
        paddingTop: '50px',
        paddingBottom: '50px',
        paddingRight: '30px',
        borderRadius: '10px'
    },
    dollarPart: {
        width: '30%',
        display: 'inline-block',
        margin: '10px',
        backgroundColor: '#ccc',
        textAlign: 'center',
        paddingTop: '50px',
        paddingBottom: '50px',
        paddingRight: '50px',
        borderRadius: '10px'
    },
    goldChart: {

    },
    chartGoldTitle: {
        marginLeft: '30px',
        marginBottom: '30px',
        backgroundColor: 'rgb(193, 192, 143)',
        padding: '5px 0px',
        borderRadius: '5px'


    },
    chartDollarTitle: {
        marginLeft: '60px',
        marginBottom: '30px',
        backgroundColor: 'rgb(193, 192, 143)',
        padding: '5px 0px',
        borderRadius: '5px'


    },
    chartData: {
        border: '1px solid',
        padding: '10px',
        borderRadius: '3px'

    },
    others: {
        width: '90vw',
        margin: '0px auto',



    },
    othersTitle: {
        color: '#222',
        marginRight: '50px',
        marginBottom: '30px',
        backgroundColor: 'rgb(193, 192, 143)',
        borderRadius: '5px',
        padding: '10px',
        width: '120px',
        textAlign:'center',
    },
    othersItem: {
        width: '200px',
        height: '90px',
        marginRight: '50px',
        marginBottom: '30px',
        backgroundColor: '#eee',
        display: 'inline-block',
        color: "#222",
        textAlign: "center",
        borderRadius: '5px',
        paddingTop: "20px"
    }
}));



function Prices() {
    const classes = useStyle();
    const [data, setData] = useState([{
        "slug": "TMT",
        "name": "منات ترکمنستان",
        "price": "128100",
        "change": "0",
        "change_percent": "0",
        "min_price": "127000",
        "max_price": "128200",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "KGS",
        "name": "سوم قرقیزستان",
        "price": "5190",
        "change": "0",
        "change_percent": "0",
        "min_price": "5150",
        "max_price": "5190",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "KRW",
        "name": "وون کره جنوبی",
        "price": "360",
        "change": "0",
        "change_percent": "0",
        "min_price": "360",
        "max_price": "370",
        "last_update": "۱۰ بهمن",
        "jalali_last_update": "۱۰ بهمن",
        "ts": "2023-01-30 00:00:00"
    },
    {
        "slug": "TJS",
        "name": "سامانی تاجیکستان",
        "price": "43800",
        "change": "0",
        "change_percent": "0",
        "min_price": "43200",
        "max_price": "43900",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "GEL",
        "name": "لاری گرجستان",
        "price": "170700",
        "change": "0",
        "change_percent": "0",
        "min_price": "169900",
        "max_price": "172000",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "AMD",
        "name": "درام ارمنستان",
        "price": "1140",
        "change": "0",
        "change_percent": "0",
        "min_price": "1130",
        "max_price": "1140",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "NZD",
        "name": "دلار نیوزیلند",
        "price": "289050",
        "change": "0",
        "change_percent": "0",
        "min_price": "285350",
        "max_price": "289550",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "QAR",
        "name": "ریال قطر",
        "price": "122200",
        "change": "0",
        "change_percent": "0",
        "min_price": "121100",
        "max_price": "122300",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "BHD",
        "name": "دینار بحرین",
        "price": "1186100",
        "change": "0",
        "change_percent": "0",
        "min_price": "1175900",
        "max_price": "1186700",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "PKR",
        "name": "روپیه پاکستان",
        "price": "1671",
        "change": "0",
        "change_percent": "0",
        "min_price": "1657",
        "max_price": "1673",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "HKD",
        "name": "دلار هنگ کنگ",
        "price": "57300",
        "change": "0",
        "change_percent": "0",
        "min_price": "56800",
        "max_price": "57300",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "AFN",
        "name": "افغانی",
        "price": "5060",
        "change": "0",
        "change_percent": "0",
        "min_price": "5010",
        "max_price": "5100",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "IQD",
        "name": "دینار عراق",
        "price": "306",
        "change": "0",
        "change_percent": "0",
        "min_price": "303",
        "max_price": "306",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "SGD",
        "name": "دلار سنگاپور",
        "price": "340700",
        "change": "0",
        "change_percent": "0",
        "min_price": "337700",
        "max_price": "340900",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "OMR",
        "name": "ریال عمان",
        "price": "1161400",
        "change": "0",
        "change_percent": "0",
        "min_price": "1151700",
        "max_price": "1163800",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "RUB",
        "name": "روبل روسیه",
        "price": "6340",
        "change": "0",
        "change_percent": "0",
        "min_price": "6290",
        "max_price": "6410",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "SYP",
        "name": "لیر سوریه",
        "price": "178",
        "change": "0",
        "change_percent": "0",
        "min_price": "176",
        "max_price": "178",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "KWD",
        "name": "دینار کویت",
        "price": "1464600",
        "change": "0",
        "change_percent": "0",
        "min_price": "1452000",
        "max_price": "1466600",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "JPY",
        "name": "ین ژاپن",
        "price": "343680",
        "change": "0",
        "change_percent": "0",
        "min_price": "340530",
        "max_price": "344660",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "CNY",
        "name": "یوان چین",
        "price": "66200",
        "change": "0",
        "change_percent": "0",
        "min_price": "65700",
        "max_price": "66200",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "NOK",
        "name": "کرون نروژ",
        "price": "44800",
        "change": "0",
        "change_percent": "0",
        "min_price": "44100",
        "max_price": "44800",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "INR",
        "name": "روپیه هند",
        "price": "5470",
        "change": "0",
        "change_percent": "0",
        "min_price": "5420",
        "max_price": "5480",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "MYR",
        "name": "رینگیت مالزی",
        "price": "104900",
        "change": "0",
        "change_percent": "0",
        "min_price": "104200",
        "max_price": "105000",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "EUR",
        "name": "یورو",
        "price": "485830",
        "change": "0",
        "change_percent": "0",
        "min_price": "480850",
        "max_price": "486040",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "SAR",
        "name": "ریال عربستان",
        "price": "119290",
        "change": "0",
        "change_percent": "0",
        "min_price": "118260",
        "max_price": "119350",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "AZN",
        "name": "منات آذربایجان",
        "price": "263300",
        "change": "0",
        "change_percent": "0",
        "min_price": "261000",
        "max_price": "263500",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "SEKE_GERAMI",
        "name": "سکه گرمی",
        "price": "48000000",
        "change": "0",
        "change_percent": "0",
        "min_price": "48000000",
        "max_price": "49000000",
        "last_update": "۱۰ بهمن",
        "jalali_last_update": "۱۰ بهمن",
        "ts": "2023-01-30 00:00:00"
    },
    {
        "slug": "SEKE_BAHAR",
        "name": "سکه بهار آزادی",
        "price": "227960000",
        "change": "0",
        "change_percent": "0",
        "min_price": "226950000",
        "max_price": "228010000",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "TRY",
        "name": "لیر ترکیه",
        "price": "23700",
        "change": "0",
        "change_percent": "0",
        "min_price": "23600",
        "max_price": "23800",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "CAD",
        "name": "دلار کانادا",
        "price": "336300",
        "change": "0",
        "change_percent": "0",
        "min_price": "331200",
        "max_price": "336600",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "AUD",
        "name": "دلار استرالیا",
        "price": "315450",
        "change": "0",
        "change_percent": "0",
        "min_price": "311150",
        "max_price": "315550",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "AED",
        "name": "درهم امارات",
        "price": "121840",
        "change": "0",
        "change_percent": "0",
        "min_price": "120800",
        "max_price": "121910",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "GBP",
        "name": "پوند انگلیس",
        "price": "550960",
        "change": "0",
        "change_percent": "0",
        "min_price": "547040",
        "max_price": "551260",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "SEKE_ROB",
        "name": "ربع سکه",
        "price": "91500000",
        "change": "0",
        "change_percent": "0",
        "min_price": "91500000",
        "max_price": "91500000",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "SEKE_NIM",
        "name": "نیم سکه",
        "price": "142500000",
        "change": "0",
        "change_percent": "0",
        "min_price": "142500000",
        "max_price": "144000000",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "SEKE_EMAMI",
        "name": "سکه امامی",
        "price": "242510000",
        "change": "0",
        "change_percent": "0",
        "min_price": "239430000",
        "max_price": "242510000",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "THB",
        "name": "بات تایلند",
        "price": "13590",
        "change": "0",
        "change_percent": "0",
        "min_price": "13420",
        "max_price": "13610",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "DKK",
        "name": "کرون دانمارک",
        "price": "65300",
        "change": "0",
        "change_percent": "0",
        "min_price": "64600",
        "max_price": "65300",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "USD",
        "name": "دلار",
        "price": "437290",
        "change": "0",
        "change_percent": "0",
        "min_price": "433310",
        "max_price": "438900",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "SEK",
        "name": "کرون سوئد",
        "price": "42800",
        "change": "0",
        "change_percent": "0",
        "min_price": "42400",
        "max_price": "42900",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "CHF",
        "name": "فرانک سوئیس",
        "price": "487500",
        "change": "0",
        "change_percent": "0",
        "min_price": "478500",
        "max_price": "487600",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "TALA_24",
        "name": "طلای 24 عیار",
        "price": "27602000",
        "change": "0",
        "change_percent": "0",
        "min_price": "27574000",
        "max_price": "28168000",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "TALA_18",
        "name": "طلای 18 عیار",
        "price": "20702000",
        "change": "0",
        "change_percent": "0",
        "min_price": "20681000",
        "max_price": "21127000",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "TALA_MESGHAL",
        "name": "مثقال طلا",
        "price": "89710000",
        "change": "0",
        "change_percent": "0",
        "min_price": "89570000",
        "max_price": "91510000",
        "last_update": "۱۱ بهمن",
        "jalali_last_update": "۱۱ بهمن",
        "ts": "2023-01-31 00:00:00"
    },
    {
        "slug": "OIL",
        "name": "نفت سبک",
        "price": "79.06",
        "change": "-0.06",
        "change_percent": "-0.08",
        "min_price": "78.98",
        "max_price": "79.33",
        "last_update": "۰۹:۵۹:۵۲",
        "jalali_last_update": "۰۹:۵۹:۵۲",
        "ts": "2023-02-01 09:59:52"
    },
    {
        "slug": "ONSNOGHRE",
        "name": "انس نقره",
        "price": "23.69",
        "change": "-0.03",
        "change_percent": "-0.11",
        "min_price": "23.62",
        "max_price": "23.74",
        "last_update": "۰۹:۵۹:۲۸",
        "jalali_last_update": "۰۹:۵۹:۲۸",
        "ts": "2023-02-01 09:59:28"
    },
    {
        "slug": "PALA",
        "name": "انس پلاتین",
        "price": "1022.05",
        "change": "2.55",
        "change_percent": "0.25",
        "min_price": "1015.85",
        "max_price": "1022.35",
        "last_update": "۰۹:۵۹:۵۲",
        "jalali_last_update": "۰۹:۵۹:۵۲",
        "ts": "2023-02-01 09:59:52"
    },
    {
        "slug": "ONSPALA",
        "name": "انس پالادیوم",
        "price": "1645.50",
        "change": "3.22",
        "change_percent": "0.2",
        "min_price": "1626.53",
        "max_price": "1645.50",
        "last_update": "۰۹:۵۹:۵۲",
        "jalali_last_update": "۰۹:۵۹:۵۲",
        "ts": "2023-02-01 09:59:52"
    },
    {
        "slug": "ONS",
        "name": "انس طلا",
        "price": "1926.37",
        "change": "-1.49",
        "change_percent": "-0.08",
        "min_price": "1924.62",
        "max_price": "1928.87",
        "last_update": "۰۹:۵۹:۵۲",
        "jalali_last_update": "۰۹:۵۹:۵۲",
        "ts": "2023-02-01 09:59:52"
    }]);

    const [getReq] = useFetch();



    useEffect(() => {
        getReq({
            //url: `https://sourcearena.ir/api/?token=a2c4800bb7f9484f6fe090af3fea4d62&currency`,
            method: "GET",
        }).then(res => {
            setData(res.data)
        }).catch(exp => {
            console.log("could not fetch data from api server")
        })
    }, [])

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }



    return (
        <div className={classes.pricesContainer}>
            <div className={classes.pricesTableContainer}>
                <h3 className={classes.date}> ۲۳ بهمن</h3>
                <div className={classes.goldPart}>
                    <Typography variant='h5' className={classes.chartGoldTitle}>سکه و طلا</Typography>
                    <table className={classes.goldChart}>
                        <tr>
                            <td className={classes.chartData}>سکه امامی </td>
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'SEKE_EMAMI').price)}</td>
                        </tr>
                        <tr>
                            <td className={classes.chartData}>سکه بهار آزادی</td>
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'SEKE_BAHAR').price)}</td>
                        </tr>
                        <tr>
                            <td className={classes.chartData}>نیم سکه</td>
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'SEKE_NIM').price)}</td>
                        </tr>
                        <tr>
                            <td className={classes.chartData}>ربع سکه</td>
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'SEKE_ROB').price)}</td>
                        </tr>
                        <tr>
                            <td className={classes.chartData}>سکه گرمی</td>
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'SEKE_GERAMI').price)}</td>
                        </tr>
                    </table>
                </div>
                <div className={classes.dollarPart}>

                    <Typography variant='h5' className={classes.chartDollarTitle}>نرخ ارز</Typography>
                    <table className={classes.goldChart}>
                        <tr>
                            <td className={classes.chartData}>دلار امریکا </td>
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'SEKE_GERAMI').price)}</td>
                        </tr>
                        <tr>
                            <td className={classes.chartData}> یورو</td>
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'SEKE_GERAMI').price)}</td>
                        </tr>
                        <tr>
                            <td className={classes.chartData}>درهم </td>
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'SEKE_GERAMI').price)}</td>
                        </tr>
                        <tr>
                            <td className={classes.chartData}>پوند </td>
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'SEKE_GERAMI').price)}</td>
                        </tr>
                        <tr>
                            <td className={classes.chartData}>یوان </td>
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'CNY').price)}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className={classes.others}>
                <h3 className={classes.othersTitle}>سایر ارز ها</h3>
                {data.map((item) => (
                    <div className={classes.othersItem}>
                        <h4>{item.name}</h4>
                        <h4>{numberWithCommas(item.price)}</h4>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Prices