import React from 'react';;
import { Box, Typography } from '@mui/material';
import { BasicButton, InputField } from '@zenra/widgets';

export interface PriceComponentProps {
    isAuthenticated?: boolean
}

const PriceComponent: React.FC<PriceComponentProps> = () => {

    const [amount, setAmount] = React.useState<string | number>('');
    const [rainfall, setRainfall] = React.useState<string | number>('');

    return (
        <div className='flex align-items-center justify-content-start font-12'>
            <Box className='light-background width-60p height-250 border-radius-15 border-shadow'>
                <Typography variant='h6' className='text-align-center padding-top-10 font-16 bolder'>
                    Price Prediction Form
                </Typography>
                <Box className='padding-10 flex flex-direction-column align-items-center'>
                    <InputField
                        className='width-240 font-14 margin-bottom-5'
                        classNameHelperText='font-12'
                        id='date'
                        label='Date'
                        placeholder='Enter Date'
                        type='date'
                        required={true}
                        variant='outlined'
                        size='sm'
                        value={amount} setState={setAmount} />
                    <InputField
                        className='width-240 font-14'
                        classNameHelperText='font-12'
                        id='total-amount'
                        label='Total Amount'
                        placeholder='Enter Total Amount'
                        type='number'
                        required={true}
                        variant='outlined'
                        size='sm'
                        value={rainfall}
                        setState={setRainfall} />
                    <BasicButton
                        className='width-120 height-5 font-12 margin-top-10'
                        id='submit'
                        label='Submit'
                        colors='primary'
                        variant='solid'
                        size='sm'
                        type='submit' />
                </Box >
            </Box>

            <Box className='light-background width-40p height-250 border-radius-15 margin-left-10 border-shadow'>
                <Typography variant='h6' className='text-align-center padding-top-10 font-16 bolder'>
                    Result
                </Typography>
                <Box className='padding-10 flex flex-direction-column align-items-center'>
                    <Typography className='font-13 margin-bottom-5'>
                        <span className='font-12'> Price Prediction: </span> 1000
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default PriceComponent;
