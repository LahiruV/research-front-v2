import { NavBar } from '@zenra/widgets';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from '@mui/material';

const HomePage: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <NavBar />
            <Box sx={{ width: '90%', margin: 'auto',paddingTop:'55px', mt: 4 }}>
                <Slider {...settings}>
                    <div>
                        <img src="https://plus.unsplash.com/premium_photo-1673264933048-3bd3f5b86f9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Slide 1" style={{ width: '100%',maxHeight:'65vh', borderRadius: 8 }} />
                    </div>
                    <div>
                        <img src="https://plus.unsplash.com/premium_photo-1673264933048-3bd3f5b86f9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Slide 2" style={{ width: '100%',maxHeight:'65vh',  borderRadius: 8 }} />
                    </div>
                    <div>
                        <img src="https://plus.unsplash.com/premium_photo-1673264933048-3bd3f5b86f9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         alt="Slide 3" style={{ width: '100%',maxHeight:'65vh',  borderRadius: 8 }} />
                    </div>
                </Slider>
            </Box>
        </div>
    );
};

export default HomePage;