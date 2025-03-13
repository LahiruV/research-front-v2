
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
    const [year, setYear] = useState<number>(0);
    const [month, setMonth] = useState<number>(0);
    const [yearValidation, setYearValidation] = useState(false);

    const onClick = (e: React.FormEvent) => {
        e.preventDefault();
        const [year, month] = (typeof date === 'string' ? date : '').split('-').map(Number);
        setYear(year);
        setMonth(month);
        if (year > 2026) {
            setYearValidation(true);
            return;
        }
        if (!year || !month) {
            console.error('Invalid date format');
            setIsLoading(false);
            return;
        }
        setYearValidation(false);
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
            year={year}
            month={month}
            yearValidation={yearValidation}
            setOpen={() => setOpen(!open)}
        />
    );
};

export default Amount;
