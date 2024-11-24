import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import { ApiBaseUrl } from "@zenra/configs"
import { image_base64 } from "@zenra/controller";

export const Base64ImageConverter = (file: File, isExecute: boolean) => {
    const formData = new FormData();
    formData.append('image', file);
    const fetchBase64ImageConverter = async () => {
        const data = await axios.post(`${ApiBaseUrl}${image_base64}`, formData)
        return data;
    };
    const { data: response, status, error } = useQuery({
        queryKey: ['base64-image-convert', file],
        queryFn: () => fetchBase64ImageConverter(),
        enabled: isExecute,
    });
    return {
        response,
        status,
        error
    };
};