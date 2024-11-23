import React from 'react';;
import './amount-component.css';
import { Box, Typography } from '@mui/material';
import { BasicButton, InputField } from '@zenra/widgets';

export interface AmountComponentProps {
    isAuthenticated?: boolean
}

const AmountComponent: React.FC<AmountComponentProps> = () => {

    const [amount, setAmount] = React.useState<string | number>('');
    const [rainfall, setRainfall] = React.useState<string | number>('');

    return (
        <div className='flex align-items-center justify-content-start font-12'>
            {/* <Box className='light-background width-400 height-400 flex justify-content-center align-items-center border-radius-15'> */}
            <Box className='light-background width-60p height-250 border-radius-15'>
                <Typography variant='h6' className='text-align-center padding-top-10 font-16'>
                    Prediction Form
                </Typography>
                <Box className='padding-10 flex flex-direction-column align-items-center'>
                    <InputField
                        className='width-240 font-14 margin-bottom-5'
                        classNameHelperText='font-12'
                        id='amount'
                        label='Amount'
                        placeholder='Enter Amount'
                        type='date'
                        required={true}
                        variant='outlined'
                        size='sm'
                        value={amount} setState={setAmount} />
                    <InputField
                        className='width-240 font-14'
                        classNameHelperText='font-12'
                        id='rainfall'
                        label='Rainfall'
                        placeholder='Enter Rainfall'
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

            <Box className='light-background width-40p height-250 border-radius-15 margin-left-10'>
                <Typography variant='h6' className='text-align-center padding-top-10 font-16'>
                    Result
                </Typography>
                <Box className='padding-10 flex flex-direction-column align-items-center'>
                    <Typography className='font-13 margin-bottom-5'>
                        <span className='font-12'> Full Amount is : </span> 100
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default AmountComponent;
