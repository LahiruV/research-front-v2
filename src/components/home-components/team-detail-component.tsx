
import { Avatar, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';;

export interface TeamDetailComponentProps {
name: string;
description: string;
image: string;
}

const TeamDetailComponent: React.FC<TeamDetailComponentProps> = ({name,description,image}: TeamDetailComponentProps) => {

    return (    
        <Card >
        <CardActionArea>
            <CardContent sx={{ height: 307 }}>
                <div className='flex'>
                <div style={{
                    paddingTop:'10px'
                }}>
                <Avatar src={image} sx={{ width: 250, height: 250 }}  variant="square"/>
                    </div>           
                <div className='padding-left-20'>
                <Typography gutterBottom  variant="h5" component="div" className='bolder font-28'>
                    {name}
                </Typography>
                <br/>
                <Typography className='font-16' sx={{ color: 'text.secondary' }}>
                   {description}
                </Typography>
                </div>     
                </div>     
            </CardContent>
        </CardActionArea>
    </Card>
    );
};

export default TeamDetailComponent;
