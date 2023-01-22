import { ChangeEvent } from 'react';

import axios, { AxiosError, AxiosResponse } from 'axios';
import Swal from 'sweetalert2';

export const handleChange = async (e: ChangeEvent<HTMLInputElement>, setImg: (n: string)=>void, setUploading: (n: number)=>void, setUrl: (n: string)=>void): Promise<void> => {

    const fileList = e.target.files;

    if (fileList === null || fileList?.length === 0) return;

    const file = fileList[0];
    const formData = new FormData();
    const reader = new FileReader();

    reader.readAsDataURL(file);
    formData.append("file", file);

    reader.onload = function(e) {

        typeof reader.result === 'string' && setImg(reader.result);
    };
    
    reader.onerror = function() {

        console.log(reader.error);
    };

    try {

        const config = {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onUploadProgress: function(progressEvent: any) {

                const percentCompleted = Math.trunc((progressEvent.loaded / progressEvent.total)*100);
                setUploading(percentCompleted <= 0 ? 1 : percentCompleted-1);
            }
        }

        const result: AxiosResponse = await axios.post('http://localhost:5000/api/1.0/upload/upload-img', formData, config);
        const response = result.data as { data: {id: string; nameFile: string; url: string;}, messages: string; status: number };

        setUploading(100);

        if (response.status !== 200) {

            await Swal.fire(response.messages);
            return;
        }

        setUrl(response.data.url);
    
    } catch (err: unknown) {

        const error = err as AxiosError;
        const response = error.response?.data as { data: string[], messages: string; status: number };

        await Swal.fire(response.messages);
        setUploading(100);
    }
}