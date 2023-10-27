import { SwiperSlide } from "swiper/react";
import Button from '@mui/material/Button';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
export default function Item (props){
    return(
        <SwiperSlide>
          <img width="94" height="94" src={props.src} alt="security-checked" />
          <p>{props.description}</p>
          <Button
            variant="contained"
            color="primary"
            >
            View More
          </Button>
        </SwiperSlide>
    )
}