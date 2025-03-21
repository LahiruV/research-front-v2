import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { AmountPayload, AmountResponse, BugPayload, BugResponse, DiseasePayload, DiseaseResponse, PricePayload, PriceResponse } from "@zenra/model";
import { amount, bug, disease, price } from "@zenra/controller";

export const AmountMutateFunc = () => {
    const { mutate: amountMutate } = useMutation({
        mutationFn: async (payload: AmountPayload) => {
            const response = await axios.post<AmountResponse>(`${'http://127.0.0.1:5001/'}${amount}`, payload);
            return response.data;
        },
        onSuccess: (response: AmountResponse) => response,
        onError: (err: AxiosError) => err,
    });
    return {
        amountMutate,
    };
};

export const PriceMutateFunc = () => {
    const { mutate: priceMutate } = useMutation({
        mutationFn: async (payload: PricePayload) => {
            const response = await axios.post<PriceResponse>(`${'http://127.0.0.1:5002/'}${price}`, payload);
            return response.data;
        },
        onSuccess: (response: PriceResponse) => response,
        onError: (err: AxiosError) => err,
    });
    return {
        priceMutate,
    };
};

export const BugMutateFunc = () => {
    const { mutate: bugMutate } = useMutation({
        mutationFn: async (payload: BugPayload) => {
            const response = await axios.post<BugResponse>(`${'http://127.0.0.1:5003/'}${bug}`, payload);
            return response.data;
        },
        onSuccess: (response: BugResponse) => response,
        onError: (err: AxiosError) => err,
    });
    return {
        bugMutate,
    };
};

export const DiseaseMutateFunc = () => {
    const { mutate: disaeasMutate } = useMutation({
        mutationFn: async (payload: DiseasePayload) => {
            const response = await axios.post<DiseaseResponse>(`${'http://127.0.0.1:5004/'}${disease}`, payload);
            return response.data;
        },
        onSuccess: (response: BugResponse) => response,
        onError: (err: AxiosError) => err,
    });
    return {
        disaeasMutate,
    };
};

