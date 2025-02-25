import { NavBar } from '@zenra/widgets';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid, Grid2, Paper, styled } from '@mui/material';
import { company_name } from '@zenra/configs';
import { DetailComponent } from '@zenra/components';

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

    const welcomeStyle = {
        paddingTop: '85px',
        fontSize: '26px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#424242',
        animation: 'fadeIn 1s ease-in-out',
    } as React.CSSProperties;

    const fadeInStyle = `@keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }`;

    const Item = styled(Paper)(({ theme }) => ({
        // backgroundColor: '#fff',
        // ...theme.typography.body2,
        // padding: theme.spacing(1),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
        // ...theme.applyStyles('dark', {
        //     backgroundColor: '#1A2027',
        // }),
    }));

    return (
        <div>
            <NavBar />
            <div style={welcomeStyle}>
                Welcome To {company_name}
            </div>
            <Box sx={{ width: '85%', margin: 'auto', mt: 4 }}>
                <Slider {...settings}>
                    <div>
                        <img src="https://plus.unsplash.com/premium_photo-1679428402040-e3c93439ec13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Slide 1" style={{ width: '100%', maxHeight: '75vh', borderRadius: 8 }} />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Slide 2" style={{ width: '100%', maxHeight: '75vh', borderRadius: 8 }} />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Slide 3" style={{ width: '100%', maxHeight: '75vh', borderRadius: 8 }} />
                    </div>
                </Slider>
            </Box>

            {/* <div className='flex margin-top-20'>
                <DetailComponent />
                <DetailComponent />
            </div>
            <div className='flex margin-top-20'>
                <DetailComponent />
                <DetailComponent />
            </div> */}

            <div className='margin-top-30'>
                <div className='text-align-center font-24 bolder margin-bottom-20' style={{ color: '#424242', paddingTop: '25px', paddingBottom: '5px' }}>
                    Our Theme
                    <hr style={{ width: '2%' }} />
                    <div className='font-14' style={{ fontWeight: 'normal' }}>
                        <Box sx={{ width: '100%' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                        </Box>
                    </div>
                </div>
            </div>
            <div className='margin-top-30'>
                <div className='text-align-center font-24 bolder margin-bottom-20' style={{ color: '#424242', paddingTop: '25px', paddingBottom: '5px' }}>
                    Our Topics
                    <hr style={{ width: '2%' }} />
                </div>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className='margin-top-30'>
                <div className='text-align-center font-24 bolder margin-bottom-20' style={{ color: '#424242', paddingTop: '25px', paddingBottom: '5px' }}>
                    Our Team
                    <hr style={{ width: '2%' }} />
                </div>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default HomePage;