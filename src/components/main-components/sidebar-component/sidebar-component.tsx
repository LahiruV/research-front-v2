import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar-component.css';
import { company_name } from '@zenra/configs';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BugReportIcon from '@mui/icons-material/BugReport';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import { useSelector } from 'react-redux';
import { RootState, setRouteTitle, setSelectedNav } from '@zenra/store';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from '@mui/material';
import { ListItemContent, ListItemDecorator } from '@mui/joy';
import { useInitialService } from '@zenra/services';

export interface SidebarProps {
    isAuthenticated: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ isAuthenticated }) => {

    const initialService = useInitialService()

    const navItems = [
        ...(isAuthenticated ? [
            { key: 'amount-predict', label: 'Quantity Prediction', path: '/amount-predict', icon: <Inventory2Icon /> },
            { key: 'price-predict', label: 'Price Prediction', path: '/price-predict', icon: <PriceChangeIcon /> },
            { key: 'bug-predict', label: 'Pest Identification', path: '/bug-predict', icon: <BugReportIcon /> },
            { key: 'disease-predict', label: 'Disease Identification', path: '/disease-predict', icon: <CoronavirusIcon /> },
        ] : [])
    ];

    const theme = useSelector((state: RootState) => state.theme.theme);
    const { selectedNav } = useSelector((state: RootState) => state.common);

    const handleSelect = (item: { key: string, label: string, path: string, icon: JSX.Element }) => {
        initialService.dispatch(setRouteTitle(item.label));
        initialService.dispatch(setSelectedNav(item.key));
    }

    return (
        <div className={`side-bar-layout padding-20 height-auto flex flex-direction-column justify-content-start ${theme}-background`}>
            <h2 className='padding-10 text-align-center margin-bottom-20 side-bar-header font-18'>{company_name}</h2>
            <nav>
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.key}>
                            <ListItemButton
                                onClick={() => handleSelect(item)}
                                className={`border-radius-5 ${selectedNav === item.key ? `${theme}-selected-sidebar` : ''} ${theme}-sidebar-hover`}
                                sx={{
                                    borderRadius: '5px',
                                    ":hover": {
                                        backgroundColor: theme === 'dark' ? '#635bff9d' : '#4949e054'
                                    }
                                }}
                            >
                                <ListItemDecorator>
                                    {item.icon}
                                </ListItemDecorator>
                                <ListItemContent>
                                    <Link to={item.path} className={`${theme}-font font-14`}>
                                        {item.label}
                                    </Link>
                                </ListItemContent>
                            </ListItemButton>
                        </ListItem>
                    ))
                    }
                </List >
            </nav >
        </div >
    );
};

export default Sidebar;
