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
        textAlign: 'center',
        position: 'fixed',
        top: '0',
        right: '0',
        marginTop: '100px',
        marginRight: '120px',
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
        textAlign: 'center',
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
    const [data, setData] = useState([
        {
            "slug": "TMT",
            "name": "منات ترکمنستان",
            "price": "131900",
            "change": "3100",
            "change_percent": "2.41",
            "min_price": "130200",
            "max_price": "131900",
            "last_update": "۱۹:۵۵:۴۲",
            "jalali_last_update": "۱۹:۵۵:۴۲",
            "ts": "2023-02-12 19:55:42"
        },
        {
            "slug": "KGS",
            "name": "سوم قرقیزستان",
            "price": "5310",
            "change": "130",
            "change_percent": "2.51",
            "min_price": "5240",
            "max_price": "5310",
            "last_update": "۱۹:۵۵:۴۹",
            "jalali_last_update": "۱۹:۵۵:۴۹",
            "ts": "2023-02-12 19:55:49"
        },
        {
            "slug": "KRW",
            "name": "وون کره جنوبی",
            "price": "360",
            "change": "0",
            "change_percent": "0",
            "min_price": "360",
            "max_price": "360",
            "last_update": "۲۰ بهمن",
            "jalali_last_update": "۲۰ بهمن",
            "ts": "2023-02-09 00:00:00"
        },
        {
            "slug": "TJS",
            "name": "سامانی تاجیکستان",
            "price": "44400",
            "change": "1000",
            "change_percent": "2.3",
            "min_price": "43900",
            "max_price": "44400",
            "last_update": "۱۸:۱۷:۴۱",
            "jalali_last_update": "۱۸:۱۷:۴۱",
            "ts": "2023-02-12 18:17:41"
        },
        {
            "slug": "GEL",
            "name": "لاری گرجستان",
            "price": "175000",
            "change": "4700",
            "change_percent": "2.76",
            "min_price": "170900",
            "max_price": "175100",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "AMD",
            "name": "درام ارمنستان",
            "price": "1170",
            "change": "20",
            "change_percent": "1.74",
            "min_price": "1160",
            "max_price": "1170",
            "last_update": "۱۲:۱۹:۱۸",
            "jalali_last_update": "۱۲:۱۹:۱۸",
            "ts": "2023-02-12 12:19:18"
        },
        {
            "slug": "NZD",
            "name": "دلار نیوزیلند",
            "price": "290100",
            "change": "3900",
            "change_percent": "1.36",
            "min_price": "283300",
            "max_price": "290100",
            "last_update": "۱۹:۵۵:۴۸",
            "jalali_last_update": "۱۹:۵۵:۴۸",
            "ts": "2023-02-12 19:55:48"
        },
        {
            "slug": "QAR",
            "name": "ریال قطر",
            "price": "126500",
            "change": "3000",
            "change_percent": "2.43",
            "min_price": "124800",
            "max_price": "126500",
            "last_update": "۱۹:۵۵:۴۸",
            "jalali_last_update": "۱۹:۵۵:۴۸",
            "ts": "2023-02-12 19:55:48"
        },
        {
            "slug": "BHD",
            "name": "دینار بحرین",
            "price": "1221400",
            "change": "28500",
            "change_percent": "2.39",
            "min_price": "1192700",
            "max_price": "1221500",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "PKR",
            "name": "روپیه پاکستان",
            "price": "1709",
            "change": "43",
            "change_percent": "2.58",
            "min_price": "1669",
            "max_price": "1709",
            "last_update": "۱۹:۵۵:۳۶",
            "jalali_last_update": "۱۹:۵۵:۳۶",
            "ts": "2023-02-12 19:55:36"
        },
        {
            "slug": "HKD",
            "name": "دلار هنگ کنگ",
            "price": "58600",
            "change": "1300",
            "change_percent": "2.27",
            "min_price": "57900",
            "max_price": "58700",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "AFN",
            "name": "افغانی",
            "price": "5100",
            "change": "90",
            "change_percent": "1.8",
            "min_price": "4980",
            "max_price": "5140",
            "last_update": "۱۹:۵۵:۲۹",
            "jalali_last_update": "۱۹:۵۵:۲۹",
            "ts": "2023-02-12 19:55:29"
        },
        {
            "slug": "IQD",
            "name": "دینار عراق",
            "price": "315",
            "change": "7",
            "change_percent": "2.27",
            "min_price": "311",
            "max_price": "315",
            "last_update": "۱۸:۱۷:۴۰",
            "jalali_last_update": "۱۸:۱۷:۴۰",
            "ts": "2023-02-12 18:17:40"
        },
        {
            "slug": "SGD",
            "name": "دلار سنگاپور",
            "price": "346100",
            "change": "5900",
            "change_percent": "1.73",
            "min_price": "338000",
            "max_price": "346200",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "OMR",
            "name": "ریال عمان",
            "price": "1196600",
            "change": "25800",
            "change_percent": "2.2",
            "min_price": "1168500",
            "max_price": "1196800",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "RUB",
            "name": "روبل روسیه",
            "price": "6380",
            "change": "200",
            "change_percent": "3.24",
            "min_price": "6230",
            "max_price": "6390",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "SYP",
            "name": "لیر سوریه",
            "price": "183",
            "change": "4",
            "change_percent": "2.23",
            "min_price": "180",
            "max_price": "183",
            "last_update": "۱۸:۱۷:۳۹",
            "jalali_last_update": "۱۸:۱۷:۳۹",
            "ts": "2023-02-12 18:17:39"
        },
        {
            "slug": "KWD",
            "name": "دینار کویت",
            "price": "1507300",
            "change": "35600",
            "change_percent": "2.42",
            "min_price": "1472000",
            "max_price": "1507500",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "JPY",
            "name": "ین ژاپن",
            "price": "350310",
            "change": "6320",
            "change_percent": "1.84",
            "min_price": "342100",
            "max_price": "350360",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "CNY",
            "name": "یوان چین",
            "price": "67600",
            "change": "1200",
            "change_percent": "1.81",
            "min_price": "66000",
            "max_price": "67600",
            "last_update": "۱۹:۲۱:۰۶",
            "jalali_last_update": "۱۹:۲۱:۰۶",
            "ts": "2023-02-12 19:21:06"
        },
        {
            "slug": "NOK",
            "name": "کرون نروژ",
            "price": "45500",
            "change": "1100",
            "change_percent": "2.48",
            "min_price": "44900",
            "max_price": "45500",
            "last_update": "۱۹:۵۵:۴۷",
            "jalali_last_update": "۱۹:۵۵:۴۷",
            "ts": "2023-02-12 19:55:47"
        },
        {
            "slug": "INR",
            "name": "روپیه هند",
            "price": "5580",
            "change": "130",
            "change_percent": "2.39",
            "min_price": "5510",
            "max_price": "5580",
            "last_update": "۱۹:۲۲:۰۶",
            "jalali_last_update": "۱۹:۲۲:۰۶",
            "ts": "2023-02-12 19:22:06"
        },
        {
            "slug": "MYR",
            "name": "رینگیت مالزی",
            "price": "106300",
            "change": "2000",
            "change_percent": "1.92",
            "min_price": "103800",
            "max_price": "106400",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "EUR",
            "name": "یورو",
            "price": "491590",
            "change": "7330",
            "change_percent": "1.51",
            "min_price": "480060",
            "max_price": "491660",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "SAR",
            "name": "ریال عربستان",
            "price": "122830",
            "change": "2870",
            "change_percent": "2.39",
            "min_price": "119950",
            "max_price": "122850",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "AZN",
            "name": "منات آذربایجان",
            "price": "271600",
            "change": "6300",
            "change_percent": "2.37",
            "min_price": "265200",
            "max_price": "271600",
            "last_update": "۱۹:۵۵:۴۷",
            "jalali_last_update": "۱۹:۵۵:۴۷",
            "ts": "2023-02-12 19:55:47"
        },
        {
            "slug": "SEKE_GERAMI",
            "name": "سکه گرمی",
            "price": "50000000",
            "change": "1000000",
            "change_percent": "2.04",
            "min_price": "50000000",
            "max_price": "50000000",
            "last_update": "۱۲:۰۶:۱۲",
            "jalali_last_update": "۱۲:۰۶:۱۲",
            "ts": "2023-02-12 12:06:12"
        },
        {
            "slug": "SEKE_BAHAR",
            "name": "سکه بهار آزادی",
            "price": "236010000",
            "change": "4000000",
            "change_percent": "1.72",
            "min_price": "232950000",
            "max_price": "237010000",
            "last_update": "۱۹:۵۵:۵۶",
            "jalali_last_update": "۱۹:۵۵:۵۶",
            "ts": "2023-02-12 19:55:56"
        },
        {
            "slug": "TRY",
            "name": "لیر ترکیه",
            "price": "24400",
            "change": "500",
            "change_percent": "2.09",
            "min_price": "24100",
            "max_price": "24400",
            "last_update": "۱۷:۲۶:۴۵",
            "jalali_last_update": "۱۷:۲۶:۴۵",
            "ts": "2023-02-12 17:26:45"
        },
        {
            "slug": "CAD",
            "name": "دلار کانادا",
            "price": "350500",
            "change": "9900",
            "change_percent": "2.91",
            "min_price": "341900",
            "max_price": "350500",
            "last_update": "۱۹:۵۵:۴۷",
            "jalali_last_update": "۱۹:۵۵:۴۷",
            "ts": "2023-02-12 19:55:47"
        },
        {
            "slug": "AUD",
            "name": "دلار استرالیا",
            "price": "318400",
            "change": "4300",
            "change_percent": "1.37",
            "min_price": "310900",
            "max_price": "318500",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "AED",
            "name": "درهم امارات",
            "price": "125340",
            "change": "2930",
            "change_percent": "2.39",
            "min_price": "122400",
            "max_price": "125360",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "GBP",
            "name": "پوند انگلیس",
            "price": "555020",
            "change": "8220",
            "change_percent": "1.5",
            "min_price": "542010",
            "max_price": "555100",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "SEKE_ROB",
            "name": "ربع سکه",
            "price": "95000000",
            "change": "2500000",
            "change_percent": "2.7",
            "min_price": "94500000",
            "max_price": "95000000",
            "last_update": "۱۲:۰۳:۱۶",
            "jalali_last_update": "۱۲:۰۳:۱۶",
            "ts": "2023-02-12 12:03:16"
        },
        {
            "slug": "SEKE_NIM",
            "name": "نیم سکه",
            "price": "145500000",
            "change": "2500000",
            "change_percent": "1.75",
            "min_price": "145000000",
            "max_price": "145500000",
            "last_update": "۱۲:۰۳:۱۶",
            "jalali_last_update": "۱۲:۰۳:۱۶",
            "ts": "2023-02-12 12:03:16"
        },
        {
            "slug": "SEKE_EMAMI",
            "name": "سکه امامی",
            "price": "250450000",
            "change": "4010000",
            "change_percent": "1.63",
            "min_price": "246930000",
            "max_price": "251510000",
            "last_update": "۱۹:۵۶:۰۴",
            "jalali_last_update": "۱۹:۵۶:۰۴",
            "ts": "2023-02-12 19:56:04"
        },
        {
            "slug": "THB",
            "name": "بات تایلند",
            "price": "13670",
            "change": "230",
            "change_percent": "1.71",
            "min_price": "13350",
            "max_price": "13670",
            "last_update": "۱۹:۲۲:۴۷",
            "jalali_last_update": "۱۹:۲۲:۴۷",
            "ts": "2023-02-12 19:22:47"
        },
        {
            "slug": "DKK",
            "name": "کرون دانمارک",
            "price": "66000",
            "change": "900",
            "change_percent": "1.38",
            "min_price": "64400",
            "max_price": "66000",
            "last_update": "۱۹:۵۵:۴۷",
            "jalali_last_update": "۱۹:۵۵:۴۷",
            "ts": "2023-02-12 19:55:47"
        },
        {
            "slug": "USD",
            "name": "دلار",
            "price": "433870",
            "change": "-260",
            "change_percent": "-0.06",
            "min_price": "433700",
            "max_price": "434460",
            "last_update": "۱۹:۵۵:۵۵",
            "jalali_last_update": "۱۹:۵۵:۵۵",
            "ts": "2023-02-12 19:55:55"
        },
        {
            "slug": "SEK",
            "name": "کرون سوئد",
            "price": "44100",
            "change": "600",
            "change_percent": "1.38",
            "min_price": "43000",
            "max_price": "44100",
            "last_update": "۱۹:۵۵:۴۱",
            "jalali_last_update": "۱۹:۵۵:۴۱",
            "ts": "2023-02-12 19:55:41"
        },
        {
            "slug": "CHF",
            "name": "فرانک سوئیس",
            "price": "498200",
            "change": "8800",
            "change_percent": "1.8",
            "min_price": "486500",
            "max_price": "498300",
            "last_update": "۱۹:۵۵:۵۴",
            "jalali_last_update": "۱۹:۵۵:۵۴",
            "ts": "2023-02-12 19:55:54"
        },
        {
            "slug": "TALA_24",
            "name": "طلای 24 عیار",
            "price": "28649000",
            "change": "490000",
            "change_percent": "1.74",
            "min_price": "28110000",
            "max_price": "28747000",
            "last_update": "۱۹:۵۵:۵۳",
            "jalali_last_update": "۱۹:۵۵:۵۳",
            "ts": "2023-02-12 19:55:53"
        },
        {
            "slug": "TALA_18",
            "name": "طلای 18 عیار",
            "price": "21487000",
            "change": "370000",
            "change_percent": "1.75",
            "min_price": "21083000",
            "max_price": "21561000",
            "last_update": "۱۹:۵۵:۵۳",
            "jalali_last_update": "۱۹:۵۵:۵۳",
            "ts": "2023-02-12 19:55:53"
        },
        {
            "slug": "TALA_MESGHAL",
            "name": "مثقال طلا",
            "price": "93210000",
            "change": "1730000",
            "change_percent": "1.89",
            "min_price": "91320000",
            "max_price": "93390000",
            "last_update": "۱۹:۵۶:۰۴",
            "jalali_last_update": "۱۹:۵۶:۰۴",
            "ts": "2023-02-12 19:56:04"
        },
        {
            "slug": "OIL",
            "name": "نفت سبک",
            "price": "79.76",
            "change": "0",
            "change_percent": "0",
            "min_price": "79.75",
            "max_price": "79.88",
            "last_update": "۲۲ بهمن",
            "jalali_last_update": "۲۲ بهمن",
            "ts": "2023-02-11 00:00:00"
        },
        {
            "slug": "ONSNOGHRE",
            "name": "انس نقره",
            "price": "22.01",
            "change": "0",
            "change_percent": "0",
            "min_price": "22.00",
            "max_price": "22.04",
            "last_update": "۲۲ بهمن",
            "jalali_last_update": "۲۲ بهمن",
            "ts": "2023-02-11 00:00:00"
        },
        {
            "slug": "PALA",
            "name": "انس پلاتین",
            "price": "950.75",
            "change": "0",
            "change_percent": "0",
            "min_price": "949.55",
            "max_price": "951.75",
            "last_update": "۲۲ بهمن",
            "jalali_last_update": "۲۲ بهمن",
            "ts": "2023-02-11 00:00:00"
        },
        {
            "slug": "ONSPALA",
            "name": "انس پالادیوم",
            "price": "1524.50",
            "change": "0",
            "change_percent": "0",
            "min_price": "1522.00",
            "max_price": "1525.28",
            "last_update": "۲۲ بهمن",
            "jalali_last_update": "۲۲ بهمن",
            "ts": "2023-02-11 00:00:00"
        },
        {
            "slug": "ONS",
            "name": "انس طلا",
            "price": "1865.93",
            "change": "0",
            "change_percent": "0",
            "min_price": "1863.53",
            "max_price": "1865.93",
            "last_update": "۲۲ بهمن",
            "jalali_last_update": "۲۲ بهمن",
            "ts": "2023-02-11 00:00:00"
        }
    ]);

    const [getReq] = useFetch();



    useEffect(() => {
        axios.get(
            //`https://sourcearena.ir/api/?token=c36f522de4c040d8f4ca5811e601a8f9&currency`
        ).then(res => {
            console.log(res.data)
            setData(data => [...data, res.data])
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
                <h3 className={classes.date}> ۲۴ بهمن</h3>
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
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'USD').price)}</td>
                        </tr>
                        <tr>
                            <td className={classes.chartData}> یورو</td>
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'EUR').price)}</td>
                        </tr>
                        <tr>
                            <td className={classes.chartData}>درهم </td>
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'AED').price)}</td>
                        </tr>
                        <tr>
                            <td className={classes.chartData}>پوند </td>
                            <td className={classes.chartData}>{numberWithCommas(data.find(x => x.slug === 'GBP').price)}</td>
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
                {data && data.map((item) => (
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