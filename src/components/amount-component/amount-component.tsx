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
    yearValidation?: boolean
    setOpen: () => void;
}

const AmountComponent: React.FC<AmountComponentProps> = ({ onClick, date, setDate, isLoading, notification, isSuccessful, open, data, setOpen, year, month, yearValidation }: AmountComponentProps) => {

    return (
        <div className='flex align-items-center justify-content-start font-12'>
            <Box className='light-background width-60p border-radius-15 light-box-shadow' sx={{ height: '315px' }}>
                <Typography variant='h6' className='text-align-center padding-top-10 font-16 bolder margin-top-10'>
                    Quantity Prediction of Rubber Plantation
                </Typography>
                <form onSubmit={onClick} className='width-max'>
                    <Box className='padding-10 flex flex-direction-column align-items-center margin-top-10'>
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
                        {yearValidation && <span className='font-12 red-main'>Year should be less than 2025</span>}
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
                        <div className='padding-top-30' style={{ width: '700px', textAlign: 'center' }} >
                            <span className='italic underline bolder'>Disclaimer </span>
                            -
                            The Rubber Quantity Prediction platform is designed for informational purposes only. Using advanced machine learning models trained on historical data from 2000 to 2023, it provides estimates for rubber plantation quantities in metric tons (MT) per month. However, these predictions are based on historical trends and may not fully reflect future conditions due to unforeseen variables. Users are advised to conduct their own research and consult professionals before making operational decisions based on these predictions. The developers are not responsible for any losses or damages incurred as a result of using this platform, and by accessing it, users acknowledge and accept these terms.
                        </div>
                    </Box >
                </form>
            </Box>

            <Box className='light-background width-40p border-radius-15 margin-left-10 light-box-shadow' sx={{ height: '315px' }}>
                <Typography variant='h6' className='text-align-center padding-top-10 font-16 bolder margin-top-10'>
                    Result
                </Typography>
                <Box className='padding-10 flex flex-direction-column align-items-center'>
                    {(year && month) ? (
                        <Typography className='font-13 margin-bottom-5'>
                            <span className='font-12'>  <b>{year} / {month}</b> : </span> {data.Ensemble.toFixed(2)}<b> MT</b>
                        </Typography>
                    ) : (
                        <Typography className='font-13 margin-bottom-5'>
                            <span className='font-12'>Fill the form to predict the quantity</span>
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
