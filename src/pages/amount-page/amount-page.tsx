
import { AmountMutateFunc } from '@zenra/api';
import { AmountComponent } from '@zenra/components';
import { handleNotifyError } from '@zenra/functions';
import { AmountPayload, AmountResponse } from '@zenra/model';
import { useInitialService } from '@zenra/services';
import { RootState, setAmount } from '@zenra/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Amount: React.FC = () => {
    const initialService = useInitialService();
    const { amountMutate } = AmountMutateFunc();
    const { amount } = useSelector((state: RootState) => state.model);
    const [date, setDate] = React.useState<string | number>('');
    const [notification, setNotification] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);

    const onClick = (e: React.FormEvent) => {
        e.preventDefault();
        const [year, month] = (typeof date === 'string' ? date : '').split('-').map(Number);
        if (!year || !month) {
            console.error('Invalid date format');
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        const payload: AmountPayload = {
            Year: year,
            Month: month,
        };
        amountMutate(payload, {
            onSuccess: (response: AmountResponse) => {
                setIsLoading(false);
                setNotification(('Amount predicted successfully').toLocaleUpperCase());
                setIsSuccessful(true);
                setOpen(true);
                initialService.dispatch(setAmount(response));
            },
            onError: (err) => {
                handleNotifyError({
                    err,
                    setNotification,
                    setIsSuccessful,
                    setOpen,
                    setIsLoading,
                });
            },
        });
    };

    return (
        <AmountComponent
            onClick={onClick}
            date={date}
            setDate={setDate}
            isLoading={isLoading}
            notification={notification}
            isSuccessful={isSuccessful}
            open={open}
            data={amount}
            setOpen={() => setOpen(!open)}
        />
    );
};

export default Amount;
