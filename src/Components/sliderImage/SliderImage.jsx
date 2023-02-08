import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { Menu, NavigateBefore, NavigateNext } from "@material-ui/icons"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const useStyle = makeStyles((theme) => ({
    slider:{
        width:"90vw",
        height:"85vh",
        margin:"90px auto",
        backgroundColor:"#eee",
        borderRadius:"10px"
    },
    slide:{
        width: "90vw",
        height: "85vh",
        objectFit: "auto",
        margin:"0 auto",
        borderRadius:"10px",
    },
    nextSlide:{
        zIndex:"1",
        right:"3% !important"
    }
}));

function SliderImage() {
    const classes = useStyle();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:true,
        nextArrow: <NavigateNext className={classes.nextSlide}/>,
        prevArrow: <NavigateBefore className={classes.prevSlide}/>,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div>
            <Slider {...settings} className={classes.slider}> 
                <div>
                    <img src="Images/1.jpg" className={classes.slide}/>
                </div>
                <div>
                    <img src="Images/4.jpeg" className={classes.slide}/>
                </div>
                <div>
                    <img src="Images/3.jpg" className={classes.slide}/>
                </div>
                <div>
                    <img src="Images/2.jpeg" className={classes.slide}/>
                </div>

             </Slider>
        </div >
    );
}

export default SliderImage;