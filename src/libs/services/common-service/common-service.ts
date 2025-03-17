import axios from 'axios';

export const removeBackground = async (file: File): Promise<File> => {
    // const apiKey = 'key';
    const apiKey = 'KVuACFwbtWLe38NHEN7jV54b';
    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('size', 'auto');

    const response = await axios.post('https://api.remove.bg/v1.0/removebg', formData, {
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'multipart/form-data',
        },
        responseType: 'arraybuffer',
    });

    if (response.status === 200) {
        const contentType = response.headers['content-type'];
        const extension = contentType.split('/')[1];
        const blob = new Blob([response.data], { type: contentType });
        return new File([blob], `processed-image.${extension}`, { type: contentType });
    } else {
        throw new Error('Failed to remove background');
    }
};
