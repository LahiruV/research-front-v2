import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { AmountPayload, AmountResponse, PricePayload, PriceResponse } from "@zenra/model";
// import { ApiBaseUrl } from "@zenra/configs";
import { amount, price } from "@zenra/controller";

export const AmountMutateFunc = () => {
    const { mutate: amountMutate } = useMutation({
        mutationFn: async (payload: AmountPayload) => {
            const response = await axios.post<AmountResponse>(`${'http://127.0.0.1:5000/'}${amount}`, payload);
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
            const response = await axios.post<PriceResponse>(`${'http://127.0.0.1:5000/'}${price}`, payload);
            return response.data;
        },
        onSuccess: (response: PriceResponse) => response,
        onError: (err: AxiosError) => err,
    });
    return {
        priceMutate,
    };
};

