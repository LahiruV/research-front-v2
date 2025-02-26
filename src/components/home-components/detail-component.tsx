
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';;

export interface DetailComponentProps {
title?: string;
description?: string;
image?: string;
isImage?:boolean;
}

const DetailComponent: React.FC<DetailComponentProps> = ({title,description,image,isImage}: DetailComponentProps) => {

    return (
        <div>
            {isImage?
            <Card >
            <CardActionArea>
            <CardMedia
        sx={{ height: 437 }}
        image={image || ''}
        title="green iguana"
      />
            </CardActionArea>
        </Card>:
        <Card >
        <CardActionArea>
            <CardContent sx={{ height: 407 }}>
                <Typography gutterBottom  variant="h5" component="div" className='underline font-28'>
                    {title}
                </Typography>
                <br/>
                <Typography className='font-16' sx={{ color: 'text.secondary' }}>
                   {description}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
        }
        </div>
    );
};

export default DetailComponent;
