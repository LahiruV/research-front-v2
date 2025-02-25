
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';;

export interface DetailComponentProps {

}

const DetailComponent: React.FC<DetailComponentProps> = ({ }: DetailComponentProps) => {

    return (
        <Card >
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='underline'>
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica  Lizards are a widespread group of squamate reptiles, with over 6,000
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default DetailComponent;
