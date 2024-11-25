
import { BugMutateFunc } from '@zenra/api';
import { FungusComponent } from '@zenra/components';
import { handleNotifyError } from '@zenra/functions';
import { BugResponse } from '@zenra/model';
import { removeBackground, useInitialService } from '@zenra/services';
import { RootState, setBug } from '@zenra/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Fungus: React.FC = () => {
    const initialService = useInitialService();
    const { bugMutate } = BugMutateFunc();
    const { bug } = useSelector((state: RootState) => state.model);
    const [notification, setNotification] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [file, setFile] = useState<File>({ name: '', size: 0, type: '' } as File);
    const [isFileUploaded, setIsFileUploaded] = useState(false);

    const onClick = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const processedFile = await removeBackground(file);
            const formData = new FormData();
            formData.append('file', processedFile);
            bugMutate(formData, {
                onSuccess: (response: BugResponse) => {
                    setIsLoading(false);
                    setNotification(('Fungus predicted successfully').toLocaleUpperCase());
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
        } catch {
            setIsLoading(false);
            setIsSuccessful(false);
            setNotification('Failed to process the image');
            setOpen(true);
            setIsFileUploaded(false);
            setFile({ name: '', size: 0, type: '' } as File);
        }
    };


    return (
        <FungusComponent
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

export default Fungus;
