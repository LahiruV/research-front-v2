import React from 'react';;
import './amount-component.css';
import { Box, Typography } from '@mui/material';
import { BasicButton, InputField, NotificationWidget } from '@zenra/widgets';
import { AmountResponse } from '@zenra/model';

export interface AmountComponentProps {
    onClick: (e: React.FormEvent) => void;
    date: string | number
    setDate: (date: string | number) => void
    isLoading?: boolean
    notification: string
    isSuccessful: boolean
    open: boolean
    data: AmountResponse
    year: number
    month: number
    setOpen: () => void;
}

const AmountComponent: React.FC<AmountComponentProps> = ({ onClick, date, setDate, isLoading, notification, isSuccessful, open, data, setOpen, year, month }: AmountComponentProps) => {

    return (
        <div className='flex align-items-center justify-content-start font-12'>
            {/* <Box className='light-background width-400 height-400 flex justify-content-center align-items-center border-radius-15'> */}
            <Box className='light-background width-60p height-250 border-radius-15 border-shadow'>
                <Typography variant='h6' className='text-align-center padding-top-10 font-16 bolder'>
                    Amount Prediction Form
                </Typography>
                <form onSubmit={onClick} className='width-max'>
                    <Box className='padding-10 flex flex-direction-column align-items-center'>
                        <InputField
                            className='width-240 font-14 margin-bottom-5'
                            id='date'
                            label='Date'
                            placeholder='Enter Date'
                            type='date'
                            required={true}
                            variant='outlined'
                            size='sm'
                            value={date}
                            setState={setDate} />
                        <BasicButton
                            className='width-120 height-5 font-12 margin-top-10'
                            id='submit'
                            label='Submit'
                            colors='primary'
                            variant='solid'
                            size='sm'
                            type='submit'
                            isLoading={isLoading}
                        />
                    </Box >
                </form>
            </Box>

            <Box className='light-background width-40p height-250 border-radius-15 margin-left-10 border-shadow'>
                <Typography variant='h6' className='text-align-center padding-top-10 font-16 bolder'>
                    Result
                </Typography>
                <Box className='padding-10 flex flex-direction-column align-items-center'>
                    {(year && month) ? (
                        <Typography className='font-13 margin-bottom-5'>
                            <span className='font-12'> Predicted <b>{year} / {month}</b> : </span> {data.Ensemble.toFixed(2)}
                        </Typography>
                    ) : (
                        <Typography className='font-13 margin-bottom-5'>
                            <span className='font-12'>Fill the form to predict the amount</span>
                        </Typography>
                    )}
                </Box>
            </Box>
            <NotificationWidget
                id='notification'
                className='font-12'
                label={notification}
                variant='solid'
                isSuccessful={isSuccessful}
                open={open}
                setOpen={setOpen}
            />
        </div >
    );
};

export default AmountComponent;
