import React, { useState } from 'react';
import { LoginComponent } from '@zenra/components';
import { LoginAdminPayload, LoginAdminResponse } from '@zenra/model';
import { AdminLogin } from '@zenra/api';
import { AxiosError } from 'axios';
import { handleNotifyError, handleNotifyResponse } from '@zenra/functions';
import { AuthService, useInitialService } from '@zenra/services';
import { setLoggedUser } from '@zenra/store';

const Login: React.FC = () => {
    const initialService = useInitialService();
    const { adminLoginMutate } = AdminLogin();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [open, setOpen] = useState(false);

    const isValidForm = (): boolean => {
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            setIsLoading(false);
            return false;
        }
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if (!isValidForm()) return;
        setError('');

        const payload: LoginAdminPayload = {
            email,
            password,
        };

        adminLoginMutate(payload, {
            onSuccess: (res: LoginAdminResponse) => {
                if (res.token) {
                    AuthService.setToken(res.token);
                    initialService.dispatch(setLoggedUser(res.user));
                }
                handleNotifyResponse({
                    res,
                    setNotification,
                    setIsSuccessful,
                    setOpen,
                    setIsLoading,
                });
                initialService.navigate('/amount-predict');
            },
            onError: (error: AxiosError) => {
                handleNotifyError({
                    err: error,
                    setNotification,
                    setIsSuccessful,
                    setOpen,
                    setIsLoading,
                });
            },
        });
    };

    return (
        <LoginComponent
            email={email}
            password={password}
            notification={notification}
            isSuccessful={isSuccessful}
            open={open}
            isLoading={isLoading}
            setEmail={setEmail}
            setPassword={setPassword}
            error={error}
            setError={setError}
            handleSubmit={handleSubmit}
            setOpen={() => setOpen(!open)}
        />
    );
};

export default Login;
