import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { Menu, NavigateBefore, NavigateNext } from "@material-ui/icons"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const useStyle = makeStyles((theme) => ({
    slider:{
        width:"900px",
        height:"506px",
        margin:"20px auto",
        backgroundColor:"#eee",
        borderRadius:"10px"
    },
    slide:{
        width: "900px",
        height: "506px",
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
                    <img src="https://images.pexels.com/photos/6474922/pexels-photo-6474922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className={classes.slide}/>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/5442465/pexels-photo-5442465.jpeg?auto=compress&cs=tinysrgb&w=600" className={classes.slide}/>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1670723/pexels-photo-1670723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={classes.slide}/>
                </div>
                <div>
                    <h3>اسلاید</h3>
                </div>
             </Slider>
        </div >
    );
}

export default SliderImage;