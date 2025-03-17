
import { PriceMutateFunc } from '@zenra/api';
import { PriceComponent } from '@zenra/components';
import { handleNotifyError } from '@zenra/functions';
import { PricePayload, PriceResponse } from '@zenra/model';
import { useInitialService } from '@zenra/services';
import { RootState, setPrice } from '@zenra/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Price: React.FC = () => {
    const initialService = useInitialService();
    const { priceMutate } = PriceMutateFunc();
    const { price } = useSelector((state: RootState) => state.model);
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
        if (year > 2025) {
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
        const payload: PricePayload = {
            Year: year,
            Month: month,
        };
        priceMutate(payload, {
            onSuccess: (response: PriceResponse) => {
                setIsLoading(false);
                setNotification(('Price predicted successfully').toLocaleUpperCase());
                setIsSuccessful(true);
                setOpen(true);
                initialService.dispatch(setPrice(response));
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
        <PriceComponent
            onClick={onClick}
            date={date}
            setDate={setDate}
            isLoading={isLoading}
            notification={notification}
            isSuccessful={isSuccessful}
            open={open}
            data={price}
            year={year}
            month={month}
            yearValidation={yearValidation}
            setOpen={() => setOpen(!open)}
        />
    );
};

export default Price;
