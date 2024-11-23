import React from 'react';;
import './home-component.css';
import HomeCardGrid from './home-card-grid-component/home-card-grid-component';
import HomeChartGrid from './home-card-chart-component/home-card-chart-component';

export interface HomeComponentProps {
    isAuthenticated?: boolean
}

const HomeComponent: React.FC<HomeComponentProps> = () => {



    return (
        <div>
            <HomeCardGrid />
            <div className={`margin-top-20`} />
            <HomeChartGrid />
        </div>);
};

export default HomeComponent;
