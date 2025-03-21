import { NavBar } from '@zenra/widgets';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid, Grid2, Paper, styled } from '@mui/material';
import { company_name } from '@zenra/configs';
import { CountingStats, DetailComponent, Footer, TeamDetailComponent } from '@zenra/components';

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
        <div style={{ backgroundColor: "#f8fbff" }}>
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
            <div className='margin-top-30'>
                <div className='text-align-center font-24 bolder margin-bottom-20' style={{ color: '#424242', paddingTop: '25px', paddingBottom: '5px' }}>
                    Vision
                    <hr style={{ width: '2%' }} />
                    <div className='font-14' style={{ fontWeight: 'normal' }}>
                        <Box sx={{ width: '100%' }}>
                            The project aims to revolutionize rubber plantation management by integrating machine learning,  and AI to enhance yield prediction, price forecasting, disease detection, and pest control. This will empower rubber farmers, plantation managers, and the industry with data-driven insights for sustainable and profitable farming.
                        </Box>
                    </div>
                </div>
            </div>
            <hr />
            <div className='margin-top-20'>
                <div className='text-align-center font-24 bolder margin-bottom-20' style={{ color: '#424242', paddingTop: '25px', paddingBottom: '5px' }}>
                    Our Main Topics
                    <hr style={{ width: '2%' }} />
                </div>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent
                                    title='Rubber Milk Volume Prediction'
                                    description='
                                    Volume of rubber milk prediction is essential for the optimal latex yield and plantation management optimization. Three machine learning models GradientBoostingRegressor, RandomForestRegressor, and LinearRegression are employed within this project to research several variables that affect latex production.  GradientBoostingRegressor is an ensemble learning technique that improves prediction through the process of averaging numerous weak learners. RandomForestRegressor is strong in the sense that it averages numerous decision trees, which makes it resilient to handling nonlinear relationships in data. LinearRegression is a baseline model that provides a simple and interpretable means through which one can discern the environmental and tree specific variable relationship. 
                                    '
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent
                                    isImage={true}
                                    image='https://cdn.britannica.com/21/75921-050-A34DC6E2/Latex-rubber-tree.jpg'
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent
                                    isImage={true}
                                    image='https://media.istockphoto.com/id/187758565/photo/green-trees-with-narrow-trunk-in-rubber-plantation.jpg?s=612x612&w=0&k=20&c=w9i81O6DwrQ9Dc-Rny6rIK8xosd2uMzBrloQ5dJi6pc='
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent
                                    title='Predicting Rubber Milk Prices'
                                    description='
                                    Predicting rubber milk (natural rubber latex) prices in Sri Lanka is crucial for farmers and traders to make informed decisions. Machine learning models such as Gradient Boosting Regressor, Random Forest Regressor, and Linear Regression can be used to analyze historical price trends and market factors.
                                    Gradient Boosting Regressor is an ensemble method that improves accuracy by combining multiple weak models, making it effective for capturing complex price patterns. Random Forest Regressor, another ensemble method, reduces overfitting by averaging multiple decision trees, ensuring stability in predictions. Meanwhile, Linear Regression, a simpler model, identifies direct relationships between price and influencing factors like demand, weather, and global rubber prices.
                                    By leveraging these models, stakeholders can predict price fluctuations with higher accuracy, allowing them to optimize production and sales strategies. Integrating these techniques with realtime data and economic indicators can further enhance the reliability of rubber milk price forecasts in Sri Lanka.
                                    '
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent
                                    title='Pest Identification of Rubber Plantation'
                                    description='Welcome to Smart Pest Detection for Rubber Plantations, an AI-powered system designed to identify pests, assess damage, and provide effective solutions for healthier rubber crops. Using Convolutional Neural Networks (CNNs), our technology analyzes plant images to detect pests like mealybugs Scale insects helping farmers take timely action. Our key objectives include identification of Pest damage (IPD), accurately classifying common pests, and providing solutions for Damage (PSD) offering targeted treatments such as chemical, biological, and cultural control methods. With a focus on efficiency, sustainability, and improved crop productivity, our system ensures smarter pest management for a thriving rubber plantation.'
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent
                                    isImage={true}
                                    image='https://plantura.garden/uk/wp-content/uploads/sites/2/2022/05/rubber-plant-pests-1024x683.jpg?x63657'
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent
                                    isImage={true}
                                    image='https://upload.wikimedia.org/wikipedia/commons/c/cf/Dedaunan_%284%29.JPG'
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <DetailComponent
                                    title='Disease Identification of Rubber Plantation'
                                    description='The Disease Identification of Rubber Plantation project focuses on detecting and classifying diseases affecting rubber trees using deep learning techniques. By leveraging computer vision and convolutional neural networks (CNNs), the system analyzes leaf images to identify diseases such as Bird’s Eye Spot and Corynespora. The dataset is preprocessed with augmentation techniques to enhance model robustness. A MobileNetV2-based CNN is trained to recognize disease patterns, ensuring accurate diagnosis. Performance evaluation includes accuracy tracking, confusion matrices, and classification reports. This research aims to support rubber plantation health management by providing an automated and efficient disease detection solution.'
                                />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <CountingStats />
            <div >
                <div className='text-align-center font-24 bolder margin-bottom-20' style={{ color: '#424242', paddingBottom: '5px' }}>
                    Our Team Members
                    <hr style={{ width: '2%' }} />
                </div>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item>
                                <TeamDetailComponent name='Buddima Thathsara Sankalpa'
                                    description='I am Buddima Thathsara Sankalpa, a 23-year-old SLIIT undergraduate pursuing cloud engineering. I am passionate about cloud computing and IT infrastructure and am excited about enhancing my technical expertise in areas like cloud deployment, security, and automation.I am gaining hands-on experience via a Cloud Engineering Internship, in which I am engaged in network configuration, domain establishment, and management of cloud-based solutions. The internship has provided me with good real-world exposure to cloud operations, which has improved my problem-solving skills and technical knowledge.'
                                    image='../../../public/photos/buddima.jpeg' />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <TeamDetailComponent name='Ishara Ranaweera'
                                    description='
                                    I amm Ishara Ranaweera , an Associate QA engineer and an udergraduate at SLIIT, specializing in information Technology  . With a strong passion for software quality assurance , I dedicated to ensuring the realibility and efficiency of software application .I keen attention to detail and analytical skills help identify and resolve issues, contributing to high-quality software soluttion .As a continuous learner, I stay updated with the latest QA methodology and industry trends  I committed to enhancing in software testing , automation, and development processes, steiving to deliver excellence in the IT field.
                                    '
                                    image='../../../public/photos/ishara.jpeg' />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <TeamDetailComponent name='Umeshi Dulakshika'
                                    description='I am Umeshi Dulakshika, an Associate QA Engineer and an undergraduate at SLIIT, specializing in Information Technology. Passionate about software quality assurance, UI/UX design, and software testing, I have hands-on experience in manual and automation testing. My research focuses on improving software quality and user experience through innovative testing methodologies. I am dedicated to continuous learning, problem-solving, and leveraging technology to enhance software reliability and user satisfaction.'
                                    image='../../../public/photos/umesha.jpeg' />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <TeamDetailComponent name='Malitha Miron'
                                    description='
                                    I’m Malitha Miron, an Associate QA Engineer and an IT undergraduate at SLIIT. Passionate about software quality assurance, UI/UX design, and testing, I have hands-on experience in both manual and automation testing. My research explores innovative testing methodologies to enhance software quality and user experience. Committed to continuous learning and problem-solving, I strive to leverage technology to improve software reliability and user satisfaction, ensuring high-quality digital experiences.
                                    '
                                    image='../../../public/photos/Malitha.jpeg' />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className='padding-top-20'>
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;