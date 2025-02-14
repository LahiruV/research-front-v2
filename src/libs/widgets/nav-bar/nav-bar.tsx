import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

export interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                color='warning'
            >
                <Toolbar>
                    <EnergySavingsLeafIcon sx={{
                        mr: 2,
                        color: "#424242"
                    }} />
                    <Typography className='bolder' variant="h6" component="div" sx={{ flexGrow: 1, }}>
                        Zenra Plantation
                    </Typography>
                    <Link to="/login"> <Button
                        variant="contained"
                        className='dark-card-font' sx={{
                            backgroundColor: '#212121',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#424242',
                                color: '#fff'
                            }
                        }} >Login</Button> </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
