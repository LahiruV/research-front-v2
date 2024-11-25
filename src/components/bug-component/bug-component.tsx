import React from 'react';
import { Box, Typography } from '@mui/material';
import { BasicButton, InputFileUpload, NotificationWidget } from '@zenra/widgets';
import { BugResponse } from '@zenra/model';

export interface BugComponentProps {
    onClick: (e: React.FormEvent) => void;
    isLoading?: boolean
    notification: string
    isSuccessful: boolean
    open: boolean
    data: BugResponse
    setOpen: () => void;
    file: File;
    isFileUploaded: boolean;
    setFile: React.Dispatch<React.SetStateAction<File>>;
    setIsFileUploaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const BugComponent: React.FC<BugComponentProps> = ({ onClick, isLoading, notification, isSuccessful, open, data, setOpen, file, isFileUploaded, setFile, setIsFileUploaded }: BugComponentProps) => {

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
        setIsFileUploaded(true);
    }

    return (
        <div className='flex align-items-center justify-content-start font-12'>
            <Box className='light-background width-60p height-250 border-radius-15 light-box-shadow'>
                <Typography variant='h6' className='text-align-center padding-top-10 font-16 bolder margin-top-10'>
                    Pest Identification of Rubber Plantation
                </Typography>
                <form onSubmit={onClick} className='width-max'>
                    <Box className='padding-10 flex flex-direction-column align-items-center margin-top-10'>
                        <InputFileUpload
                            id='image'
                            className='margin-bottom-10 margin-top-10 font-11 light-font'
                            label="Select Image"
                            afterLabel="Selected"
                            file={file}
                            isFileUploaded={isFileUploaded}
                            variant='outlined'
                            required={true}
                            onChange={handleFileChange}
                        />
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

            <Box className='light-background width-40p height-250 border-radius-15 margin-left-10 light-box-shadow'>
                <Typography variant='h6' className='text-align-center padding-top-10 font-16 bolder margin-top-10'>
                    Result
                </Typography>
                <Box className='padding-10 flex flex-direction-column align-items-center'>
                    {(data) ? (
                        <Typography className='font-13 margin-bottom-5'>
                            {data.class}
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

export default BugComponent;
