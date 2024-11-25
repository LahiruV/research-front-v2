import React, { useEffect, useState } from 'react';
import { RegisterComponent } from '@zenra/components';
import { RegisterAdminPayload, Response } from '@zenra/model';
import { AdminRegister, Base64ImageConverter } from '@zenra/api';
import { handleNotifyError, handleNotifyResponse } from '@zenra/functions';
import { AxiosError } from 'axios';

const Register: React.FC = () => {
    const { adminRegisterMutate } = AdminRegister();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState<File>({ name: '', size: 0, type: '' } as File);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [isFileConverted, setIsFileConverted] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const [notification, setNotification] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);
    const { response, status } = Base64ImageConverter(file, isFileUploaded);

    useEffect(() => {
        if (status === 'success') {
            setNotification('IMAGE UPLOADED SUCCESSFULLY.');
            setIsSuccessful(true);
            setOpen(true);
            setIsFileUploaded(false);
            setIsFileConverted(true);
            setError('');
        }
        if (status === 'error') {
            setNotification('FAILED TO UPLOAD IMAGE.');
            setIsSuccessful(false);
            setOpen(true);
            setIsFileUploaded(false);
            setIsFileConverted(false);
        }
    }, [status, file]);

    const validation = () => {
        if (!name) {
            setError('Name cannot be empty.');
        } else if (!email) {
            setError('Email cannot be empty.');
        } else if (!password) {
            setError('Password cannot be empty.');
        } else if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
        }
        else if (!file) {
            setError('Please upload a profile image.');
        }
        else if (!response) {
            setError('Please upload a profile image.');
        }
        else {
            return true;
        }
        setIsLoading(false);
        return false;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        if (!validation()) return;
        setError('');
        const payload: RegisterAdminPayload = {
            name,
            email,
            password,
            image: response?.data.base64Image
        };
        adminRegisterMutate(payload, {
            onSuccess: (res: Response) => handleNotifyResponse({
                res,
                setNotification,
                setIsSuccessful,
                setOpen,
                setIsLoading,
            }),
            onError: (error: AxiosError) => handleNotifyError({
                err: error,
                setNotification,
                setIsSuccessful,
                setOpen,
                setIsLoading,
            }),
        });
    };


    return (
        <RegisterComponent
            name={name}
            email={email}
            password={password}
            file={file}
            isFileUploaded={isFileUploaded}
            error={error}
            isLoading={isLoading}
            isFileConverted={isFileConverted}
            open={open}
            notification={notification}
            isSuccessful={isSuccessful}
            setOpen={() => setOpen(false)}
            setError={setError}
            handleSubmit={handleSubmit}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            setFile={setFile}
            setIsFileUploaded={setIsFileUploaded}
        />
    );
};

export default Register;
