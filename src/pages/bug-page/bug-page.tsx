
import { BugMutateFunc } from '@zenra/api';
import { BugComponent } from '@zenra/components';
import { handleNotifyError } from '@zenra/functions';
import { BugResponse } from '@zenra/model';
import { useInitialService } from '@zenra/services';
import { RootState, setBug } from '@zenra/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Bug: React.FC = () => {
    const initialService = useInitialService();
    const { bugMutate } = BugMutateFunc();
    const { bug } = useSelector((state: RootState) => state.model);
    const [notification, setNotification] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [file, setFile] = useState<File>({ name: '', size: 0, type: '' } as File);
    const [isFileUploaded, setIsFileUploaded] = useState(false);

    const onClick = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append('file', file);

        bugMutate(formData, {
            onSuccess: (response: BugResponse) => {
                setIsLoading(false);
                setNotification(('Bug predicted successfully').toLocaleUpperCase());
                setIsSuccessful(true);
                setOpen(true);
                initialService.dispatch(setBug(response));
                setIsFileUploaded(false);
                setFile({ name: '', size: 0, type: '' } as File);
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
        <BugComponent
            onClick={onClick}
            isLoading={isLoading}
            notification={notification}
            isSuccessful={isSuccessful}
            open={open}
            data={bug}
            setOpen={() => setOpen(false)}
            file={file}
            isFileUploaded={isFileUploaded}
            setFile={setFile}
            setIsFileUploaded={setIsFileUploaded}
        />
    );
};

export default Bug;
